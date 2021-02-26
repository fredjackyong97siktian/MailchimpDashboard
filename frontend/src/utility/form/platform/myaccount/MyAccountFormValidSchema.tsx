import * as yup from "yup";
import axios from 'axios';
import config from '../../../../config'


const API_URL = String(config.API_BACKEND)
const API_CLIENT = String(config.API_CLIENT);

export const PlatformFormValidSchema = yup.object().shape({
  platformname: yup.string().required("Platform Name is a required field").min(4,"The platform name should not less than 4 characters").max(30,"The platform name has a max characters of 30"),
  companyname : yup.string().required("Company Name is a required field"),
  });