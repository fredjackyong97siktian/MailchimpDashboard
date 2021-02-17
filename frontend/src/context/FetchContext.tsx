import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
const config = require('./../config')

interface ProviderContext {
    authAxios :any

}

const FetchContext = createContext<ProviderContext>({authAxios:()=>{}});
const {Provider} = FetchContext;

const FetchProvider = ({children} : any)=>{
    const authContext = useContext(AuthContext);

    const authAxios= axios.create({
        baseURL: config.API_BACKEND,
    })

    authAxios.interceptors.request.use(
        configs=>{
            configs.headers.Authorization = `Bearer ${authContext.authState.jwtToken}`
            return configs;
        },
        error=>{
            return Promise.reject(error);
        }
    )

    return (
        <Provider
        value={{authAxios}}
        >
            {children}
        </Provider>
    )
}

export {FetchContext, FetchProvider}