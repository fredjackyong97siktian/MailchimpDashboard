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
import { Typography } from '@material-ui/core';
import {FetchContext} from '../../../../context/FetchContext';


const MyAccountForm : React.FC = () => {
    const {authData} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);
    const email = authData.userInfo.email;
    const classes = useStylesForm();
    const dispatch = useDispatch();

    const {register , handleSubmit , errors  } = useForm<PlatformAdd>({
        resolver: yupResolver(PlatformFormValidSchema)
    });

    const onSubmitForm = async (data: PlatformAdd) => {
        data.email = email;    
        dispatch(CPlatform(data,authAxios));
    };

    return( 
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} noValidate>
        <Grid container spacing={2} >
        <Grid item xs={12}>
            <Typography variant='h5' style={{textAlign:'left'}}>
                My Profile
            </Typography>
        </Grid>
        <Grid item xs={12}>
            Give your platform a name.
        <TextField
            inputRef={register}
            autoComplete="platformname"
            name="platformname"
            variant="outlined"
            required
            fullWidth
            id="platformname"
            label="Platform Name"
            autoFocus
            className={errors.platformname? classes.error_outline: undefined}
        />
        {errors.platformname? <span className={classes.error_message}> {errors.platformname?.message}  </span> : undefined}
        </Grid>
        <Grid item xs={12} >
            Your instituition / company you currently working with.
        <TextField
            inputRef={register}
            variant="outlined"
            required
            fullWidth
            id="companyname"
            label="Company Name"
            name="companyname"
            autoComplete="companyname"       
            className={errors.companyname? classes.error_outline: undefined}
            />
        {errors.companyname? <span className={classes.error_message}> {errors.companyname?.message}  </span> : undefined}
        </Grid>
        </Grid>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        >
        Add Platform
        </Button>
        </form>   );

}

export default MyAccountForm
