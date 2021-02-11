import * as effect from './SignupEffect'
import {SIGNUP_CREATE} from './SignupConstant'
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'
import {FormInputRegister} from './../../../../model/forminput/FormInputAuth' 

//Action Creators
export const CSignup = (information : FormInputRegister ) => async(dispatch : any) => {
    let emailtobesent = false;
    dispatch({type:PAGE_STATUS_LOADING});
    try {
        const Inputdata = information;
        delete Inputdata.repassword;
        //console.log(Inputdata);
        const {data} = await effect.Signup(Inputdata);
        emailtobesent = true;
        dispatch({type: SIGNUP_CREATE , payload: information}); 
        dispatch({type:PAGE_STATUS_SUCCESS,payload: data});

    }catch(error){
        dispatch({type:PAGE_STATUS_ERROR,payload: error.message});
    }finally{
        if(emailtobesent){
            const emailobject = {"email": information.email}
            const email = await effect.EmailVerification(emailobject);
        }
    }
    

}