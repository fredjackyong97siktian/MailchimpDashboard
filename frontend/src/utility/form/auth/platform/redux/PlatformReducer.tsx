import {PLATFORM_ADD} from './PlatformConstant';
import {PlatformAdd} from '../../../../../model/forminput/FormInputAuth' 

const initiateState : PlatformAdd = {
        email : '',
        companyname:'',
        platformname: ''
}

const LoginReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case PLATFORM_ADD:
            return {...state}
        default:
            return state;
    }
}

export default LoginReducer