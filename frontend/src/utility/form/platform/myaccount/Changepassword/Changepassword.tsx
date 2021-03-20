import React, {useState , useEffect , useContext}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ChangepasswordValidSchema} from './ChangepasswordValidSchema';
import useStylesForm from '../../../Form-style';
import {useDispatch  } from 'react-redux';
import {AuthContext} from '../../../../../context/AuthContext';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../../../view/modal/Loadingpage/redux/LoadingConstant'
import { Typography, FormControl } from '@material-ui/core';
import {FetchContext} from '../../../../../context/FetchContext';
import { useSnackbar } from 'notistack';
import {ChangePasswordI} from './../../../../../model/myaccount/myaccount';

const ChangepasswordForm : React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {authData} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);
    const email = authData.userInfo.email;
    const classes = useStylesForm();
    const dispatch = useDispatch();

    const [userDetail, setUserDetail] = useState<ChangePasswordI>({
        oldpassword : '',
        password: '',
        repassword : ''
    });

    const {control, register , handleSubmit , errors,  reset ,watch } = useForm<ChangePasswordI>({
         resolver: yupResolver(ChangepasswordValidSchema)
    });
    

    const onSubmitForm = async (data: ChangePasswordI) => {    
        dispatch({type:PAGE_STATUS_LOADING});
        try{
            await authAxios.post('myaccount/changepassword', data);
            enqueueSnackbar('This is a success message!',{variant: 'success'});
            setUserDetail({...userDetail,...data})
            reset(data);
            dispatch({type: PAGE_STATUS_SUCCESS,payload: data});
            
            console.log('Done Fecthing')
        }catch(error){
            const payload = {message: error.message || error,
                explaination: ''}
             dispatch({type:PAGE_STATUS_ERROR, payload: payload});
        }
    };

    //onSubmit={handleSubmit(onSubmitForm)}
    return( 
       <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}  noValidate>
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Typography variant='h5' style={{textAlign:'left',fontWeight:'bold'}}>
                    Change Password   
                </Typography>
            </Grid>
        <Grid item xs={12}>
            Old Password
        <Controller
            render={(props)=>(     
            <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="oldpassword"
                name="oldpassword"
                variant="outlined"
                type="password"
                required
                fullWidth
                id="oldpassword"
                size="small"
            />)}
            control={control}
            name="oldpassword"
            defaultValue=""
        />
        {errors.oldpassword? <span className={classes.error_message}> {errors.oldpassword?.message}  </span> : undefined}

        </Grid>
        <Grid item xs={12}>
           New Password
        <Controller
            render={(props)=>(     
            <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="password"
                name="password"
                variant="outlined"
                type="password"
                required
                fullWidth
                id="password"
                size="small"
            />)}
            control={control}
            name="password"
            defaultValue=""
        />

        {errors.password? <span className={classes.error_message}> {errors.password?.message}  </span> : undefined}
        </Grid>
        <Grid item xs={12}>
            Re-New Password
        <Controller
            render={(props)=>(     
            <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="repassword"
                name="repassword"
                variant="outlined"
                type="password"
                required
                fullWidth
                id="repassword"
                size="small"
            />)}
            control={control}
            name="repassword"
            defaultValue=""
        />
        {errors.repassword? <span className={classes.error_message}> {errors.repassword?.message}  </span> : undefined}
        </Grid>
        </Grid>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        >
        Save
        </Button>
        </form>      
        );

}

export default ChangepasswordForm
