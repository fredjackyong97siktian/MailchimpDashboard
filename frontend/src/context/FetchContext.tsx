import React, {createContext, useEffect} from 'react';
import axios from 'axios';

const config = require('./../config')

interface ProviderContext {
    authAxios :any

}

const FetchContext = createContext<ProviderContext>({authAxios:()=>{}});
const {Provider} = FetchContext;

const FetchProvider = ({children} : any)=>{

    const authAxios= axios.create({
        baseURL: config.API_BACKEND,
    })
    useEffect(()=>{
        const getCsrfToken = async()=>{
            const {data} = await authAxios.get('csrf-token');
            authAxios.defaults.headers['X-CSRF-Token']= data.csrfToken;
        }
        getCsrfToken();
    },[])
    
    return (
        <Provider
        value={{authAxios}}
        >
            {children}
        </Provider>
    )
}

export {FetchContext, FetchProvider}