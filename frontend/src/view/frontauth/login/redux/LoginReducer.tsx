import {LOGIN_READ} from './LoginConstant';
import {FormInputLogin} from '../../../../model/forminput/FormInputAuth' 

const initiateState : FormInputLogin = {
        email : '',
        password: '',
        remember: false,
}

const LoginReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case LOGIN_READ:
            return {...state}
        default:
            return state;
    }
}

export default LoginReducer