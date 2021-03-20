import React, { ReactDOM ,useContext} from 'react';
import {FormInputLogin} from '../../../../model/forminput/FormInputAuth'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ForgetPasswordRecoverFormValidSchema} from './ForgetPasswordFormValidSchema';
import {useDispatch  } from 'react-redux';
import {RLogin} from '../../../../view/frontauth/login/redux/LoginAction';
import useStylesForm from '../../Form-style';
import {AuthContext} from '../../../../context/AuthContext';

interface ForgetPasswordRecoverI {
    password: string,
    repassword: string,
}

const ForgetPasswordForm : React.FC = () => {
    const authContext = useContext(AuthContext);
    const classes = useStylesForm();
    const dispatch = useDispatch();
    const {register, handleSubmit , errors } = useForm<ForgetPasswordRecoverI>({
        resolver: yupResolver(ForgetPasswordRecoverFormValidSchema)
    });
    
    const onSubmitForm = (data: ForgetPasswordRecoverI) => {
      /* API TO READ THE CODE IS CORRECT AND ALLOW THEM TO CHANGE PASSWORD. ELSE ERROR 404 */
    };

   return(
    <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} noValidate>
    <TextField
      inputRef={register}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="password"
      label="Password"
      name="password"
      autoComplete="password"
      autoFocus
      className={errors.password? classes.error_outline: undefined}
    />
    {errors.password? <span className={classes.error_message}> {errors.password?.message}  </span> : undefined}

    <TextField
      inputRef={register}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="repassword"
      label="Re-Password"
      name="repassword"
      autoComplete="repassword"
      autoFocus
      className={errors.repassword? classes.error_outline: undefined}
    />
    {errors.repassword? <span className={classes.error_message}> {errors.repassword?.message}  </span> : undefined}
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