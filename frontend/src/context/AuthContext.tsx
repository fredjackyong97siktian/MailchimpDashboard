import React, {useState, createContext} from 'react';
import {useHistory} from 'react-router-dom';

interface AuthContextI {
    jwtToken: any,
    userInfo: any,
    expiresAt : any
}

 interface ProviderContext {
    authState: any,
    setAuthState : (authInfo: AuthContextI) => void,
    isAuth : ()=> boolean

}

const AuthContextInitial = {
    authState:{},
    setAuthState: () => {}, 
    isAuth: ()=>false
}

const AuthContext = createContext<ProviderContext>(AuthContextInitial);
const {Provider} = AuthContext;

const AuthProvider = ({children} :any) => {
    const history = useHistory();
    const jwtToken = localStorage.getItem('jwtToken');
    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');

    const [authState, setAuthState] = useState<AuthContextI>({
        jwtToken,
        expiresAt,
        userInfo: userInfo ? JSON.parse(userInfo) : {}
    })

    const setAuthInfo = ({ jwtToken, userInfo, expiresAt} : AuthContextI)=>{        
        localStorage.setItem('jwtToken',jwtToken);
        localStorage.setItem('userInfo',JSON.stringify(userInfo));
        localStorage.setItem('expiresAt',expiresAt);
        
        setAuthState({
            jwtToken,
            userInfo,
            expiresAt
        })
    }

    const logout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('expiresAt');  
        
        setAuthState({
            jwtToken: null,
            userInfo : {},
            expiresAt : null
        })

        history.push('/auth/login');
    }


    const isAuth = () => {
        if(!authState.jwtToken || !authState.expiresAt){
            return false;
        }
        return new Date().getTime() / 1000 < authState.expiresAt
    }
    return(
        <Provider
          value={{
              authState,
              setAuthState : (authInfo : AuthContextI) => setAuthInfo(authInfo),
              isAuth
          }} >
              {children}
          </Provider>
    );
};

export {AuthContext, AuthProvider}