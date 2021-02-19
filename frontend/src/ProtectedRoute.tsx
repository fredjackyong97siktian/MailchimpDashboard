import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = ({authState,component: Component, ...rest} : any) => {
    return(
        <Route
        {...rest}
        render={(props)=>{
            return authState ? <Component /> : <Redirect to={{ pathname: "/auth/login",state: {from: props.location}}}/> 
        }} 
        />
    )

}

export default ProtectedRoute;