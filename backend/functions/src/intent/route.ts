import SignupRoute from './signup/route'
import EmailRoute from './email/route'
import Oauth from './login/oauth/index'
import LoginRoute from './login/route'
import PlatformRoute from './platform/route'
import MyaccountRoute from './myaccount/route'
import {auth , logout} from './auth'
import express , {Request, Response} from 'express';
import {checkJWT} from './../jwt/tokenchecker';

const rootRouter = express.Router();

//Public
const public_prefix = '/auth'
rootRouter.use(public_prefix+'/signup',SignupRoute)
rootRouter.use(public_prefix+'/login',LoginRoute)

//Protected
//const private_prefix = '/:platformid'
rootRouter.use('/platform' , PlatformRoute)


//Auth
rootRouter.post('/verify/profile', checkJWT, auth)  
rootRouter.post('/logout', logout)  

//MyAccount
rootRouter.use('/myaccount',MyaccountRoute)

//Others
rootRouter.use('/email',EmailRoute);

//Oauth
const third_party = '/oauth'
rootRouter.use(third_party+'/signup', Oauth);

export default rootRouter