import * as effect from './LoginEffect'
import {LOGIN_READ} from './LoginConstant'
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'
import {FormInputLogin} from '../../../../model/forminput/FormInputAuth' 
import config from './../../../../config'
//Action Creators
export const RLogin = (information : FormInputLogin ) => async(dispatch : any) => {
    dispatch({type:PAGE_STATUS_LOADING});
    try {
        const Inputdata = information;
        delete Inputdata["remember"];
        const {data} = await effect.Login(Inputdata); 
        if (!data.passwordsMatch){
            throw Object.assign(
                new Error("Wrong Email or Password"),
                { code: 402 }
             );
        }
        dispatch({type: LOGIN_READ , payload: information})
        dispatch({type: PAGE_STATUS_SUCCESS,payload: data});
        window.location.replace(String(config.API_CLIENT));

    }catch(error){
        const payload = {message: error.message || error,
                         explaination: ''}
        dispatch({type:PAGE_STATUS_ERROR, payload: payload});
    }
}

export const RLoginFB = (authContext: any) => async (dispatch : any)=> {
    dispatch({type:PAGE_STATUS_LOADING});
    try {
        const data = await effect.LoginFB();
        dispatch({type: LOGIN_READ })
        dispatch({type: PAGE_STATUS_SUCCESS});
    }catch(error){
        const payload = {message: error.message || error,
            explaination: ''}
        dispatch({type:PAGE_STATUS_ERROR, payload: payload});        
    }
}