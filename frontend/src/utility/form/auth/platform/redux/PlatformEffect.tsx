import React, {useState , useEffect , useContext}from 'react';
import {FetchContext} from './../../../../../context/FetchContext';
//converting URL[unknown] to String to meet the axios type
//const API_BACKEND = String(config.API_BACKEND)

//export const Login = (LoginInfo : any) => (publicFetch.post('auth/login/read', LoginInfo, {withCredentials: true}));
export const PlatformAdd = (PlatformInfo : any) => {
    //**AUTHAXIOS has problem */
    const {authAxios} = useContext(FetchContext);
    alert(authAxios)
    authAxios.post('auth/login/read', PlatformInfo)
    
};

