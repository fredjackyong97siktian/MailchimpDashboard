import axios from 'axios';
import config from '../../../../config'
import {publicFetch} from '../../../../utility/axios/PublicFetch'
//converting URL[unknown] to String to meet the axios type
//const API_BACKEND = String(config.API_BACKEND)

export const Login = (LoginInfo : any) => (publicFetch.post('auth/login/read', LoginInfo, {withCredentials: true}));
export const LoginFB = () => (publicFetch.post('oauth/signup/facebook'));

