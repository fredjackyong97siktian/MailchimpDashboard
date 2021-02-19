import SignupRoute from './signup/route'
import EmailRoute from './email/route'
import Oauth from './login/oauth/index'
import LoginRoute from './login/route'
import {auth , logout} from './auth'
import express  from 'express';
import {checkJWT} from './../jwt/tokenchecker';
const rootRouter = express.Router();

//Public
const public_prefix = '/auth'
rootRouter.use(public_prefix+'/signup',SignupRoute)
rootRouter.use(public_prefix+'/login',LoginRoute)

//Protected
//const private_prefix = '/:platformid'

//Auth
rootRouter.post('/verify/profile', checkJWT, auth)  
rootRouter.post('/logout', logout)  

//Others
rootRouter.use('/email',EmailRoute);

//Oauth
const third_party = '/oauth'
rootRouter.use(third_party+'/signup', Oauth);

export default rootRouter