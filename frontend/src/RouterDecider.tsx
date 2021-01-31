import React, { ReactDOM } from 'react';
import {  Switch, Route} from "react-router-dom";
import Login from "./view/frontauth/login/Login";
import Signup from "./view/frontauth/signup/Signup";
import Feature from "./view/feature/Feature";

const RouterDecider : React.FC = () => {
   return(
    <>
        <Switch>
          <Route exact path="/auth/login" component= {Login} />
          <Route exact path="/auth/signup" component = {Signup} />
          <Route exact path="/feature" component = {Feature}/>
        </Switch>
    </>    
   ); 
}

export default RouterDecider