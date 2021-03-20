import React, { ReactDOM ,useContext} from 'react';
import {FormInputLogin} from '../../../../model/forminput/FormInputAuth'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ForgetPasswordFormValidSchema} from './ForgetPasswordFormValidSchema';
import {useDispatch  } from 'react-redux';
import {RLogin} from '../../../../view/frontauth/login/redux/LoginAction';
import useStylesForm from '../../Form-style';
import {AuthContext} from '../../../../context/AuthContext';

interface ForgetPasswordI {
  email: string
}

const ForgetPasswordForm : React.FC = () => {
    const authContext = useContext(AuthContext);
    const classes = useStylesForm();
    const dispatch = useDispatch();
    const {register, handleSubmit , errors } = useForm<ForgetPasswordI>({
        resolver: yupResolver(ForgetPasswordFormValidSchema)
    });
    
    const onSubmitForm = (data: ForgetPasswordI) => {
      /*API TO SET UP THE FORGET PASSWORD CODE AND SEND EMAIL */
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
    
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Reset password
    </Button>
  </form>   
   ); 

}

export default ForgetPasswordForm