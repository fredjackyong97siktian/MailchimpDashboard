import axios from 'axios';
import config from '../../../../config'

//converting URL[unknown] to String to meet the axios type
const API_URL = String(config.API_URL)

export const Login = (LoginInfo : any) => (axios.post(API_URL+'auth/login/read', LoginInfo));
export const LoginFB = () => (axios.post(API_URL+'oauth/signup/facebook'));

