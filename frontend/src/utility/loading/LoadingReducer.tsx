import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from './LoadingConstant';
import {LoadingStatus} from './../../model/loading/Loading' 

const initiateState : LoadingStatus = {
    loading: false,
    status: null,
    message: ''
}

const LoadingReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case PAGE_STATUS_LOADING:
            return {...state, 
                loading: true,
                status:null,
                message: ''}
        case PAGE_STATUS_SUCCESS:
            return {...state,
                loading: false,
                status: true,
                message: action.payload}
        case PAGE_STATUS_ERROR:
            return {...state,
                loading: false,
                status:false,
                message: action.payload}
        default:
            return state;
    }
}

export default LoadingReducer