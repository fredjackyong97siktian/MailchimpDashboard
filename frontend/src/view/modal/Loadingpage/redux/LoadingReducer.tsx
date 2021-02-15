import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR ,PAGE_STATUS_RECOVER} from './LoadingConstant';
import {LoadingStatus} from './../../../../model/loading/Loading' 

const initiateState : LoadingStatus = {
    loading: false,
    hasSuccess: false,
    hasError: false,
    message: '',
    explaination: ''
}

const LoadingReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case PAGE_STATUS_LOADING:
            return {...state, 
                loading: true,
                hasSuccess:false,
                message: ''}
        case PAGE_STATUS_SUCCESS:
            return {...state,
                loading: false,
                hasSuccess: true,
                hasError:false,
                message: action.payload}
        case PAGE_STATUS_ERROR:
            return {...state,
                loading: false,
                hasSuccess:false,
                hasError:true,
                message: action.payload.message,
                explaination: action.payload.explaination}
        case PAGE_STATUS_RECOVER:
            return {
                loading: false,
                hasSuccess: false,
                hasError: false,
                message: '' ,
                explaination: '' 
            }
        default:
            return state;
    }
}

export default LoadingReducer