import {SIGNUP_CREATE} from './SignupConstant';
import {FormInputRegister} from './../../../../model/forminput/FormInputAuth' 

const initiateState : FormInputRegister = {
        firstname : '',
        lastname: '',
        email: '',
        password: '',
        repassword: ''
}

const SignupReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case SIGNUP_CREATE:
            return {...state}
        default:
            return state;
    }
}

export default SignupReducer