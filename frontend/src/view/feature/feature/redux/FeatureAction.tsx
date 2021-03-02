import * as effect from './FeatureEffect'
import {FEATURE_FETCH} from './FeatureConstant';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'

//Action Creators
export const RPlatformS = (authAxios:any ,platformid: string ) => async(dispatch : any) => {
    dispatch({type:PAGE_STATUS_LOADING});
    try {
        console.log('platform/'+platformid);
        const {data} = await effect.FeatureFetch(authAxios,platformid); 
        dispatch({type: FEATURE_FETCH,payload: data.platformDetail});
        dispatch({type: PAGE_STATUS_SUCCESS});
    }catch(error){
        const payload = {message: error.message || error,
                         explaination: ''}
        dispatch({type:PAGE_STATUS_ERROR, payload: payload});
    }
}