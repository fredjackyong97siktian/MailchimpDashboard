import {combineReducers} from 'redux';
import SignupReducer from './../view/frontauth/signup/redux/SignupReducer'
import LoadingReducer from '../view/modal/Loadingpage/redux/LoadingReducer'
import LoginReducer from './../view/frontauth/login/redux/LoginReducer';
import FeatureReducer from './../view/feature/feature/redux/FeatureReducer';
import MetricsReducer from './../view/feature/connection/connectionMetrics/redux/ConnectionMetricsReducer';

export const reducers =  combineReducers({
    signup : SignupReducer ,
    loading : LoadingReducer,
    login : LoginReducer,
    feature : FeatureReducer,
    metrics : MetricsReducer,
});

export type RootState = ReturnType<typeof reducers>