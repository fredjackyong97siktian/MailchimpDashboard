import React, {useState , useEffect}from 'react';
import TextField from '@material-ui/core/TextField';
import {FormInputRegister, RegisterStatus} from './../../../model/forminput/FormInputAuth' 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {SignupFormValidSchema} from './SignupFormValidSchema';
import useStylesForm from '../Form-style';
import {useDispatch  } from 'react-redux';
import {CSignup} from './../../../view/frontauth/signup/redux/SignupAction';

const SignupForm : React.FC = () => {

    const classes = useStylesForm();
    const dispatch = useDispatch();
    const {register , handleSubmit , errors  } = useForm<FormInputRegister>({
        mode:'onChange',
        resolver: yupResolver(SignupFormValidSchema)
    });

    const onSubmitForm = async (data: FormInputRegister) => {
        
           dispatch(CSignup(data))
    };

    return( 
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} noValidate>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField
            inputRef={register}
            autoComplete="fname"
            name="firstname"
            variant="outlined"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            className={errors.firstname? classes.error_outline: undefined}
        />
        {errors.firstname? <span className={classes.error_message}> {errors.firstname?.message}  </span> : undefined}
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            inputRef={register}
            variant="outlined"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="lname"
            className={errors.lastname? classes.error_outline: undefined}
            />
        {errors.lastname? <span className={classes.error_message}> {errors.lastname?.message}  </span> : undefined}
        </Grid>
        <Grid item xs={12}>
            <TextField
            inputRef={register}
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className={errors.email? classes.error_outline: undefined}
            />
        {errors.email? <span className={classes.error_message}> {errors.email?.message}  </span> : undefined}    
        </Grid>
        <Grid item xs={12}>
            <TextField
            inputRef={register}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={errors.password? classes.error_outline: undefined}
            />
        {errors.password? <span className={classes.error_message}> {errors.password?.message}  </span> : undefined}
        </Grid>
        <Grid item xs={12}>
            <TextField
            inputRef={register}
            variant="outlined"
            required
            fullWidth
            name="repassword"
            label="Re-Password"
            type="password"
            id="repassword"
            autoComplete="re-password"
            className={errors.repassword? classes.error_outline: undefined}
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
        Sign Up
        </Button>
        </form>   );

}

export default SignupForm
