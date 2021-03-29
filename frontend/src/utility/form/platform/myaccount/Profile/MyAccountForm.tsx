import React, {useState , useEffect , useContext}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {MyAccountFormValidSchema} from './MyAccountFormValidSchema';
import useStylesForm from '../../../Form-style';
import {useDispatch  } from 'react-redux';
import {AuthContext} from '../../../../../context/AuthContext';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../../../view/modal/Loadingpage/redux/LoadingConstant'
import { Typography, FormControl } from '@material-ui/core';
import {FetchContext} from '../../../../../context/FetchContext';
import countries from './Countries.json';
import countriescommon from './CountriesCommon.json';
import { useSnackbar } from 'notistack';
import {UserDetailI} from '../../../../../model/myaccount/myaccount';

const MyAccountForm : React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {authData} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);
    const email = authData.userInfo.email;
    const classes = useStylesForm();
    const dispatch = useDispatch();

    const [country ,setCountry] = useState("");
    const [userDetail, setUserDetail] = useState<UserDetailI>({
        email: authData.userInfo.email,
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        postal_code: '',
        country: '',
        state: ''
    });

    const {control, register , handleSubmit , errors,  reset ,watch } = useForm<UserDetailI>({
        defaultValues : userDetail,
        resolver: yupResolver(MyAccountFormValidSchema)
    });
    

    const onSubmitForm = async (data: UserDetailI) => {    
        dispatch({type:PAGE_STATUS_LOADING});
        try{
            await authAxios.post('myaccount/update', data);
            enqueueSnackbar('Your profile is saved.',{variant: 'success'});
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
    const countryChange = watch("country")

   // const [country,setCountry] = useState("");
    const handleChange = (event : any) => {
        const {name , value} = event.target
        setUserDetail({...userDetail,[name]:value})

        //setCountry(event.target.value);
      };

    const handleChangeCountry = (event:any)=>{
        setCountry(event.target.value);
        }
    useEffect(()=>{
        const userFetch = async () => {
            dispatch({type:PAGE_STATUS_LOADING});
            try{
                const {data} = await authAxios.post('myaccount/edit', {email:authData.userInfo.email});
                const userData = data.user[0];
                // remove the attribute with null value. So it wont attach to defaultvalue
                Object.keys(userData).forEach(key => userData[key]===null && delete userData[key])
                setUserDetail({...userDetail,...userData})
                reset(userData);
                dispatch({type: PAGE_STATUS_SUCCESS,payload: data});
                console.log('Done Fecthing')
            }catch(error){
                const payload = {message: error.message || error,
                    explaination: ''}
                 dispatch({type:PAGE_STATUS_ERROR, payload: payload});
            }

        }
        userFetch();

    },[authAxios])

    const selectedcountry = countries.find(({ countryName }) => countryName === countryChange)
    let region : React.ReactNode;
    if(selectedcountry){

        region = (selectedcountry.regions as any[]).map((region)=>{
            return(
            <option key={region.shortCode} value={region.name} >
                {region.name}
            </option>      
            )
        })
    }

    //onSubmit={handleSubmit(onSubmitForm)}
    return( 
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}  noValidate>
        <Grid container spacing={2} >
        <Grid item xs={12}>
            <Typography variant='h5' style={{textAlign:'left',fontWeight:'bold'}}>
                Profile    
            </Typography>
        </Grid>
        <Grid item xs={12}>
            Email
        <Controller
            render={(props)=>(     
            <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                size="small"
                disabled
            />)}
            control={control}
            name="email"
            defaultValue=""
        />

        {errors.email? <span className={classes.error_message}> {errors.email?.message}  </span> : undefined}
        </Grid>
        <Grid item xs={12}>
            First Name
        <Controller
            render={(props)=>(      
            <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="firstname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                size="small"
                className={errors.firstname ? classes.error_outline: undefined}
            />)}
            control={control}
            name="firstname"
            defaultValue=""
        />

        {errors.firstname? <span className={classes.error_message}> {errors.firstname?.message}  </span> : undefined}
        </Grid>    
        <Grid item xs={12}>
        Last Name
        <Controller
            render={(props)=>(     
                <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="lastname"
                name="lastname"
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                size="small"
                className={errors.lastname ? classes.error_outline: undefined}
                />)}
            control={control}
            name="lastname"
            defaultValue=""
        />

        {errors.lastname? <span className={classes.error_message}> {errors.lastname?.message}  </span> : undefined}
        </Grid>   
        <Grid item xs={12}>
        Address 1
        <Controller
            render={(props)=>(      
                <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="address1"
                name="address1"
                variant="outlined"
                required
                fullWidth
                id="address1"
                label="Address 1"
                size="small"
                className={errors.address1? classes.error_outline: undefined}
                />)}
            control={control}
            name="address1"
            defaultValue=""
        />
        {errors.address1? <span className={classes.error_message}> {errors.address1?.message}  </span> : undefined}
        </Grid> 
        <Grid item xs={12}>
        Address 2
        <Controller
            render={(props)=>(      
                <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="address2"
                name="address2"
                variant="outlined"
                fullWidth
                id="address2"
                label="Address 2"
                size="small"
                className={errors.address2? classes.error_outline: undefined}
                />
                )}
            control={control}
            name="address2"
            defaultValue=""
        />
        {errors.address2? <span className={classes.error_message}> {errors.address2?.message}  </span> : undefined}
        </Grid> 
        <Grid item xs={12} md={6}>
        City
        <Controller
            render={(props)=>(    
                <TextField
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                autoComplete="city"
                name="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                size="small"
                className={errors.city? classes.error_outline: undefined}
                />
                )}
            control={control}
            name="city"
            defaultValue=""
        />
        {errors.city? <span className={classes.error_message}> {errors.city?.message}  </span> : undefined}
        </Grid>   
        <Grid item xs={12} md={6}>
        Postal Code
        <Controller
            render={(props)=>(      
            <TextField
            value={props.value}
            onChange={props.onChange}
            inputRef={props.ref}
            autoComplete="postal_code"
            name="postal_code"
            variant="outlined"
            required
            fullWidth
            id="postal_code"
            label="Postal Code"

            size="small"
            className={errors.postal_code? classes.error_outline: undefined}
            />
            )}
            control={control}
            name="postal_code"
            defaultValue=""
        />
        {errors.postal_code? <span className={classes.error_message}> {errors.postal_code?.message}  </span> : undefined}
        </Grid>  
        <Grid item xs={12} md={6}>
        Country
        <Controller
            render={(props)=>(      
                <TextField
                id="country"
                name="country"
                select
                placeholder="Country"
                SelectProps={{
                native: true,
                }}
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                fullWidth
                variant="outlined"
                size="small"
                className={errors.country? classes.error_outline: undefined}
                >   
                {<option style={{display:"none"}}></option>}
                {   
                    countriescommon.map((country)=>(
                        <option key={country.countryShortCode} value={country.countryName} >
                            {country.countryName}
                        </option>                    
                    ))
                }
                <option disabled>--------------------</option>
                {
                    countries.map((country : any)=>(
                        <option key={country.countryShortCode} value={country.countryName} >
                            {country.countryName}
                        </option>
                    ))
                }
                </TextField>
            )}
            control={control}
            name="country"
            defaultValue=""
        />
        {errors.country? <span className={classes.error_message}> {errors.country?.message}  </span> : undefined}
        </Grid>  
        <Grid item xs={12} md={6}>
        State
        <Controller
            render={(props)=>(      
                <TextField
                id="state"
                placeholder="State"
                select
                SelectProps={{
                native: true,
                }}
                value={props.value}
                onChange={props.onChange}
                inputRef={props.ref}
                fullWidth
                variant="outlined"
                size="small"
                helperText={!countryChange ? "Select Country First" : ""}
                disabled={!countryChange}
                className={errors.state? classes.error_outline: undefined}
                >   
                    {region}
                </TextField>
            )}
            control={control}
            name="state"
            defaultValue=""
        />
        {errors.state? <span className={classes.error_message}> {errors.state?.message}  </span> : undefined}
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
        </form>   );

}

export default MyAccountForm
