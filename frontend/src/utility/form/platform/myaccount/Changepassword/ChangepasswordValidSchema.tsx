import * as yup from "yup";
import axios from 'axios';
import config from '../../../../../config'


const API_URL = String(config.API_BACKEND)
const API_CLIENT = String(config.API_CLIENT);

export const ChangepasswordValidSchema = yup.object().shape({
  oldpassword:yup.string().required("Old Password is required"),
  password: yup.string().required("New Password is required").matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  repassword : yup.string().required("Re-New Password is required").oneOf([yup.ref('password'), null], 'Passwords must match')
  });