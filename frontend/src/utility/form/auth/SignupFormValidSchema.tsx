import * as yup from "yup";

export const SignupFormValidSchema = yup.object().shape({
    firstname : yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    repassword : yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
  });