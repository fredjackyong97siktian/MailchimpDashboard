import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = ({isAuth: isAuth,component: Component, ...rest} : any) => {
    return(
        <Route
        {...rest}
        render={(props)=>{
            return isAuth ? <Component /> : <Redirect to={{ pathname: "/",state: {from: props.location}}}/> 
        }} 
        />
    )

}

export default ProtectedRoute;