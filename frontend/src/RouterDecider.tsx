import React, { ReactDOM, useContext } from 'react';
import {  Switch, Route} from "react-router-dom";
import Login from "./view/frontauth/login/Login";
import Signup from "./view/frontauth/signup/Signup";
import Feature from "./view/feature/Feature";
import LoadingPage from "./view/modal/Successpage/Successpage";
import SignUpDecider from "./view/frontauth/signup/Signup-decider";
import ProtectedRoute from './ProtectedRoute';
import {AuthContext} from './context/AuthContext';
const RouterDecider : React.FC = () => {
  const {isAuth} = useContext(AuthContext);
  console.log(isAuth())
   return(
    <>
        <Switch>
          <Route exact path="/auth/login" component= {Login} />
          <Route exact path="/auth/signup" component = {Signup} />
          <Route exact path="/auth/signup/:status" component = {SignUpDecider}/>   
          <ProtectedRoute exact path="/feature" component = {Feature} isAuth = {isAuth()}/>
          <Route exact path="/loading" component = {LoadingPage}/>         
        </Switch>
    </>    
   ); 
}

export default RouterDecider