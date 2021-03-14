import React, { ReactDOM, useContext } from 'react';
import {  Switch, Route} from "react-router-dom";
import Login from "./view/frontauth/login/Login";
import Signup from "./view/frontauth/signup/Signup";
import Feature from "./view/feature/feature/Feature";
import LoadingPage from "./view/modal/Successpage/Successpage";
import SignUpDecider from "./view/frontauth/signup/Signup-decider";
import ProtectedRoute from './ProtectedRoute';
import {AuthContext} from './context/AuthContext';
import Platform from './view/platform/platformdisplay/Platform';
import PlatformAdd from './view/platform/platformadd/Platformadd';
import MyAccount from './view/user/myaccount/MyAccount';
import ZohoPeople from './application/zoho/people/ZohoPeople';
import ZohoPeopleStatus from './application/zoho/people/ZohoPeopleStatus';

const RouterDecider : React.FC = () => {
  const {authState} = useContext(AuthContext);

      /*const isAuth = () => {
        console.log(authState)
        console.log('isAuth')
        if(!authState.expiresAt || !authState.userInfo){
            return false;
        }
        return new Date().getTime() / 1000 < authState.expiresAt
       // return true;
        //return true;
    }*/
  //console.log(isAuth())
   return(
    <>
        <Switch>
          <Route exact path="/auth/login" component= {Login} />
          <Route exact path="/auth/test" component= {MyAccount} />
          <Route exact path="/auth/signup" component = {Signup} />
          <Route exact path="/auth/signup/:status" component = {SignUpDecider}/>   
          <Route exact path="/auth/app/zoho/people" component = {ZohoPeople}/>   
          <Route  path="/auth/app/zoho/people/status/:granttype/:domain" component = {ZohoPeopleStatus}/>  
          <ProtectedRoute exact path="/platform/add" component = {PlatformAdd} authState = {authState}/>
          <ProtectedRoute path="/platform/:platformid" component = {Feature} authState = {authState}/>
          <ProtectedRoute exact path="/" component = {Platform} authState = {authState}/>
          <ProtectedRoute exact path="/myaccount" component= {MyAccount} authState = {authState}/>          
        </Switch>
    </>    
   ); 
}

export default RouterDecider