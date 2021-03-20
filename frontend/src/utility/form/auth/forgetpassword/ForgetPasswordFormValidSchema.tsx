import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//<p className={errors.email? classes.error_message:undefined}> {errors.email?.message} </p>

export const ForgetPasswordFormValidSchema = yup.object().shape({
    email: yup.string().required()
  });

export const ForgetPasswordRecoverFormValidSchema = yup.object().shape({
  password: yup.string().required().matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  repassword : yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
});