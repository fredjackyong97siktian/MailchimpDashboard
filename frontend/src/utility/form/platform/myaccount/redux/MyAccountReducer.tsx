import {MYACCOUNT_EDIT} from './MyAccountConstant';
import {PlatformAdd} from '../../../../../model/forminput/FormInputAuth' 

const initiateState : PlatformAdd = {
        email : '',
        companyname:'',
        platformname: ''
}

const LoginReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case MYACCOUNT_EDIT:
            return {...state}
        default:
            return state;
    }
}

export default LoginReducer