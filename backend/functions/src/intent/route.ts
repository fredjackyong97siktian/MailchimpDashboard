import SignupRoute from './signup/route'
import EmailRoute from './email/route'
import Oauth from './login/oauth/index'
import LoginRoute from './login/route'
import PlatformRoute from './platform/route'
import MyaccountRoute from './myaccount/route'
import MyConnectionRoute from './myconnection/route'
import {auth , logout} from './auth'
import express , {Request, Response} from 'express';
import {checkJWT} from './../jwt/tokenchecker';
import {attachUser} from './../jwt/userchecker';
import router from './signup/route'
const rootRouter = express.Router();

//Public
const public_prefix = '/auth'
rootRouter.use(public_prefix+'/signup',SignupRoute)
rootRouter.use(public_prefix+'/login',LoginRoute)

//Others
rootRouter.use('/email',EmailRoute);

//Oauth
const third_party = '/oauth'
rootRouter.use(third_party+'/signup', Oauth);

/* --------------------------- Protected -------------------- */
rootRouter.use(attachUser);
//const private_prefix = '/:platformid'
rootRouter.use('/platform' , PlatformRoute)
//MyConnection
rootRouter.use('/myconnection', MyConnectionRoute)

//Auth
rootRouter.post('/verify/profile', checkJWT, auth)  
rootRouter.post('/logout', logout)  

//MyAccount
rootRouter.use('/myaccount',MyaccountRoute)





export default rootRouter