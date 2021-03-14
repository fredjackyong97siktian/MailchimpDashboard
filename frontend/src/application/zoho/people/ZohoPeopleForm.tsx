import React ,{useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";
import useStylesForm from '../../../utility/form/Form-style';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Grid from '@material-ui/core/Grid';
import config from '../../../config';
import {AuthContext} from '../../../context/AuthContext';
import {FetchContext} from '../../../context/FetchContext';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_ERROR} from '../../../view/modal/Loadingpage/redux/LoadingConstant'
interface ZohoPeopeFormI {
    domain: string
}

const ZohoPeopleForm :React.FC = () => {
    const domainName = [{"name":".com"},{"name":".eu"},{"name":".in"}]
    const {authData} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);
    const classes = useStylesForm();
    const dispatch = useDispatch();

    const ZohoPeopleFormValidSchema = yup.object().shape({
        domain: yup.string().required(),
    });

    const {control, handleSubmit , errors } = useForm<ZohoPeopeFormI>({
        resolver: yupResolver(ZohoPeopleFormValidSchema)
    });
    const CLIENT_ID = config.ZOHO.CLIENT_ID
    const REDIRECT_URL = config.ZOHO.REDIRECT_URL
    const onSubmitForm = async (domain: ZohoPeopeFormI) => { 
        dispatch({type:PAGE_STATUS_LOADING});
        try{
            const {data} = await authAxios.post(`${config.API_BACKEND}oauth/app/zoho/people/domain`, domain );
            if(data.success && data.id) {
                window.location.replace(`https://accounts.zoho.com/oauth/v2/auth?scope=ZOHOPEOPLE.employee.ALL&client_id=${CLIENT_ID}&response_type=code&access_type=online&redirect_uri=${REDIRECT_URL}`) 
            }else {
                throw "No Input Found";
            }
        }catch(error){
            const payload = {message: error.message || error,
                explaination: ''}
            dispatch({type:PAGE_STATUS_ERROR, payload: payload});
        }
    }

    return(
    <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} noValidate>
        <Grid item xs={12}>
        Domain
        <Controller
            render={(props)=>(      
                <TextField
                id="domain"
                name="domain"
                select
                placeholder="Domain"
                SelectProps={{
                native: true,
                }}
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                fullWidth
                variant="outlined"
                size="small"
                className={errors.domain ? classes.error_outline: undefined}
                > 
                {<option style={{display:"none"}}></option>}  
                {
                    domainName.map((dn : any)=>(
                        <option key={dn.name} value={dn.name} >
                            {dn.name}
                        </option>
                    ))
                }
                </TextField>
            )}
            control={control}
            name="domain"
            defaultValue=""
        />
        {errors.domain? <span className={classes.error_message}> {errors.domain?.message}  </span> : undefined}
        </Grid>  
    
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>
          Submit
        </Button>
    </form>   
    )
}

export default ZohoPeopleForm