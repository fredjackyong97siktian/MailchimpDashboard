import React, {useState , useEffect , useContext}from 'react';

import axios from 'axios'
//converting URL[unknown] to String to meet the axios type
//const API_BACKEND = String(config.API_BACKEND)

//export const Login = (LoginInfo : any) => (publicFetch.post('auth/login/read', LoginInfo, {withCredentials: true}));
export const FeatureFetch = (authAxios:any , platformid : string) => (authAxios.get('platform/'+platformid));

