import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//<p className={errors.email? classes.error_message:undefined}> {errors.email?.message} </p>

export const LoginFormValidSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });