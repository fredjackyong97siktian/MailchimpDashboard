import React, { ReactDOM } from 'react';
import {FormInputLogin} from './../../../model/forminput/FormInputAuth'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginFormValidSchema} from './LoginFormValidSchema';
import useStylesForm from '../Form-style';

const LoginForm : React.FC = () => {
    const classes = useStylesForm();
    const {register, handleSubmit , errors } = useForm<FormInputLogin>({
        resolver: yupResolver(LoginFormValidSchema)
    });

    const onSubmitForm = (data: FormInputLogin) => {
    alert("before redirect..");
    window.location.href = "http://localhost:3000/feature";
    return false;
    };

   return(
    <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} noValidate>
    <TextField
      inputRef={register}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      className={errors.email? classes.error_outline: undefined}
    />
    {errors.email? <span className={classes.error_message}> {errors.email?.message}  </span> : undefined}
    
    <TextField
      inputRef={register}
      variant="outlined"
      margin="normal"
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
    <br/>
    <FormControlLabel
      control={<Checkbox  inputRef={register} name="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Sign In
    </Button>
  </form>   
   ); 

}

export default LoginForm