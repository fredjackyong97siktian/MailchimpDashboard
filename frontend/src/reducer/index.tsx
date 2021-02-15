import {combineReducers} from 'redux';
import SignupReducer from './../view/frontauth/signup/redux/SignupReducer'
import LoadingReducer from '../view/modal/Loadingpage/redux/LoadingReducer'
import LoginReducer from './../view/frontauth/login/redux/LoginReducer';

export const reducers =  combineReducers({
    signup : SignupReducer ,
    loading : LoadingReducer,
    login : LoginReducer,
});

export type RootState = ReturnType<typeof reducers>