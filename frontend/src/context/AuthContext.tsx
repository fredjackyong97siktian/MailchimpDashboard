import React, {useState, createContext ,useEffect , useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FetchContext} from './FetchContext';

interface AuthContextI {
    userInfo: any,
    expiresAt : any
}

 interface ProviderContext {
    authData: any,
    authState :boolean
    logout: () => void
}

const AuthContextInitial = {
    authData:{},
    authState: false,
    logout: () => {}
}

const AuthContext = createContext<ProviderContext>(AuthContextInitial);
const {Provider} = AuthContext;

const AuthProvider = ({children} :any) => {
    const {authAxios} = useContext(FetchContext);
    const history = useHistory();

    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');

    const [authState,setAuthState] = useState(true);
    const [authData, setAuthData] = useState<AuthContextI>({
        expiresAt,
        userInfo: userInfo ? JSON.parse(userInfo) : {}
    })

    const setAuthInfo = ({ userInfo, expiresAt} : AuthContextI)=>{  
        localStorage.setItem(
            'userInfo',
            JSON.stringify(userInfo)
          );
        localStorage.setItem('expiresAt', expiresAt);
                    
        setAuthData({
            userInfo,
            expiresAt
        })
    }

    useEffect(()=>{
        const auth = async () => {
            try{
                const {data} = await authAxios.post('verify/profile');
                setAuthInfo(data)
                setAuthState(true);
                }catch{
                  setAuthState(false);
                  console.error('Unauthorized')
                }
             }
             console.log(auth);
             auth();
    },[authAxios])

    const logout = () => {
        const logoutCall = async () => {
            try{
                await authAxios.post('logout');
                localStorage.removeItem('userInfo');
                localStorage.removeItem('expiresAt');
                setAuthState(false);
                setAuthData({
                    userInfo : {},
                    expiresAt : null
                })
                }catch{
                    console.log("Something Wrong")
                }
             }
        logoutCall();

        history.push('/auth/login');
    }

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
    
    return(
        <Provider
          value={{
              authData,
              authState,
              logout
          }} >
              {children}
          </Provider>
    );
};

export {AuthContext, AuthProvider}