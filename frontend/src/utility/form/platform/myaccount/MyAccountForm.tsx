import React, {useState , useEffect , useContext}from 'react';
import TextField from '@material-ui/core/TextField';
import {PlatformAdd} from '../../../../model/forminput/FormInputAuth' 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {PlatformFormValidSchema} from './MyAccountFormValidSchema';
import useStylesForm from '../../Form-style';
import {useDispatch  } from 'react-redux';
import {AuthContext} from '../../../../context/AuthContext';
import {CPlatform} from './redux/MyAccountAction';
import { Typography, FormControl } from '@material-ui/core';
import {FetchContext} from '../../../../context/FetchContext';
import countries from './Countries.json';
import countriescommon from './CountriesCommon.json';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx'
interface RegionI {
    name: string,
    shortCode: string
}
interface CountryI {
    countryName: string,
    countryShortCode: string,
    regions: Array<RegionI>
}
const MyAccountForm : React.FC = () => {
    const {authData} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);
    const email = authData.userInfo.email;
    const classes = useStylesForm();
    const dispatch = useDispatch();

    const {register , handleSubmit , errors  } = useForm<PlatformAdd>({
        resolver: yupResolver(PlatformFormValidSchema)
    });

    useEffect(()=>{
        const userFetch = async () => {
            
        }
    },[])

    const [country,setCountry] = useState("");
    const handleChangeCountry = (event : any) => {
        setCountry(event.target.value);
      };
    const onSubmitForm = async (data: PlatformAdd) => {
        data.email = email;    
        dispatch(CPlatform(data,authAxios));
    };
    
    const selectedcountry = countries.find(({ countryName }) => countryName === country)
    let region;
    if(selectedcountry){
        region = (selectedcountry.regions as any[]).map((region)=>{
            return(
            <option key={region.shortCode} value={region.name} >
                {region.name}
            </option>      
            )
        })
    }

    
    return( 
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} noValidate>
        <Grid container spacing={2} >
        <Grid item xs={12}>
            <Typography variant='h5' style={{textAlign:'left',fontWeight:'bold'}}>
                Profile
            </Typography>
        </Grid>
        <Grid item xs={12}>
            Email
        <TextField
            inputRef={register}
            autoComplete="platformname"
            name="platformname"
            variant="outlined"
            required
            fullWidth
            id="platformname"
            size="small"
            value="ex.b@hotmail.com"
            disabled
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>
        <Grid item xs={12}>
            First Name
        <TextField
            inputRef={register}
            autoComplete="firstname"
            name="firstname"
            variant="outlined"
            required
            fullWidth
            id="firstname"
            label="First Name"
            size="small"
            className={errors.platformname? classes.error_outline: undefined}
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>    
        <Grid item xs={12}>
            Last Name
        <TextField
            inputRef={register}
            autoComplete="lastname"
            name="lastname"
            variant="outlined"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            size="small"
            className={errors.platformname? classes.error_outline: undefined}
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>  
        <Grid item xs={12}>
            Address 1
        <TextField
            inputRef={register}
            autoComplete="address1"
            name="address1"
            variant="outlined"
            required
            fullWidth
            id="address1"
            label="Address 1"
            size="small"
            className={errors.platformname? classes.error_outline: undefined}
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>    
        <Grid item xs={12}>
            Address 2
        <TextField
            inputRef={register}
            autoComplete="address2"
            name="address2"
            variant="outlined"
            required
            fullWidth
            id="address2"
            label="Address 2"
            size="small"
            className={errors.platformname? classes.error_outline: undefined}
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>   
        <Grid item xs={12} md={6}>
            City
        <TextField
            inputRef={register}
            autoComplete="city"
            name="city"
            variant="outlined"
            required
            fullWidth
            id="city"
            label="City"
            size="small"
            className={errors.platformname? classes.error_outline: undefined}
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>   
  
        <Grid item xs={12} md={6}>
            Postal Code
        <TextField
            inputRef={register}
            autoComplete="postalcode"
            name="postalcode"
            variant="outlined"
            required
            fullWidth
            id="postalcode"
            label="Postal Code"
            autoFocus
            size="small"
            className={errors.platformname? classes.error_outline: undefined}
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>   
        <Grid item xs={12} md={6}>
            Country
        <TextField
          inputRef={register}
          id="outlined-select-currency-native"
          select
          placeholder="Country"
          value={country}
          onChange={handleChangeCountry}
          SelectProps={{
            native: true,
          }}
          fullWidth
          variant="outlined"
          size="small"
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
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid> 
        <Grid item xs={12} md={6}>
            State
        <TextField
          inputRef={register}
          id="outlined-select-currency-native"
          placeholder="State"
          select
          SelectProps={{
            native: true,
          }}
          fullWidth
          variant="outlined"
          size="small"
          helperText={!country ? "Select Country First" : ""}
          disabled={!country}
        >   
        {region}
        </TextField>
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
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
