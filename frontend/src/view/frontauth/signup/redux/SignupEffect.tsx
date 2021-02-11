import axios from 'axios';
import config from './../../../../config'

//converting URL[unknown] to String to meet the axios type
const API_URL = String(config.API_URL)

export const Signup = (newSignup : any) => (axios.post(API_URL+'auth/signup/add'    , newSignup));
export const EmailVerification = (email : any) => (axios.post(API_URL+'email/verification', email));

