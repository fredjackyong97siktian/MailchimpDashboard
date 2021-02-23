import * as effect from './PlatformEffect'
import {PLATFORM_ADD} from './PlatformConstant';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../../../view/modal/Loadingpage/redux/LoadingConstant'
import {PlatformAdd} from './../../../../../model/forminput/FormInputAuth'  
import config from './../../../../../config';
//Action Creators
export const CPlatform = (information : PlatformAdd ,authAxios:any ) => async(dispatch : any) => {
    dispatch({type:PAGE_STATUS_LOADING});
    try {
        
        const Inputdata = information;
        const data = await effect.PlatformAdd(Inputdata,authAxios); 
        console.log(Inputdata);
        dispatch({type: PLATFORM_ADD , payload: information})
        dispatch({type: PAGE_STATUS_SUCCESS,payload: data});
        window.location.replace(String(config.API_CLIENT+'/platform'));

    }catch(error){
        const payload = {message: error.message || error,
                         explaination: ''}
        dispatch({type:PAGE_STATUS_ERROR, payload: payload});
    }
}