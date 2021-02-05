import {combineReducers} from 'redux';
import SignupReducer from './../view/frontauth/signup/redux/SignupReducer'
import LoadingReducer from '../view/modal/Loadingpage/redux/LoadingReducer'

export const reducers =  combineReducers({
    signup : SignupReducer ,
    loading : LoadingReducer,
});

export type RootState = ReturnType<typeof reducers>