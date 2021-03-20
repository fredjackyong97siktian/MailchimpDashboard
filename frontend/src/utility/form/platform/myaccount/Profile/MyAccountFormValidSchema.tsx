import * as yup from "yup";
import axios from 'axios';
import config from '../../../../../config'


const API_URL = String(config.API_BACKEND)
const API_CLIENT = String(config.API_CLIENT);

export const MyAccountFormValidSchema = yup.object().shape({
  email:yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  address1: yup.string().required(),
  address2: yup.string().required(),
  city: yup.string().required(),
  postal_code: yup.string().required(),
  country: yup.string().required(),
  state: yup.string().required()
  });