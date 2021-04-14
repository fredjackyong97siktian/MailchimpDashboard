import ForgetPasswordRoute from './forgetpassword/route';
import SignupRoute from './signup/route'
import EmailRoute from './email/route'
import Oauth from './login/oauth/index'
import LoginRoute from './login/route'
import PlatformRoute from './platform/route'
import MyaccountRoute from './myaccount/route'
//import MyConnectionRoute from './platform/myconnection/route'
import ZohoPeople from '../application/zoho/people/route';
import QuickBook from '../application/quickbook/route';
import MailChimp from '../application/mailchimp/route';
import Nav from '../intent/nav/route';
import Dashboard from '../intent/dashboard/route';
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

//ForgetPassword
rootRouter.use(public_prefix+'/forgetpassword',ForgetPasswordRoute)

//Others
rootRouter.use('/email',EmailRoute);

//Oauth
const third_party = '/oauth'
rootRouter.use(third_party+'/signup', Oauth);

/*Remember to put back under attachUser */
rootRouter.use(third_party+'/app/mailchimp', MailChimp);
/* --------------------------- Protected -------------------- */
rootRouter.use(attachUser);

rootRouter.use(third_party+'/app/zoho/people', ZohoPeople);
rootRouter.use(third_party+'/app/quickbook', QuickBook);

/*Navigation */
const nav = '/nav'
rootRouter.use(nav,Nav);

/*Dashboard */
const dashboard= '/dashboard'
rootRouter.use(dashboard,Dashboard)

//const private_prefix = '/:platformid'
rootRouter.use('/platform' , PlatformRoute)
//MyConnection
//rootRouter.use('/myconnection', MyConnectionRoute)

//App


//Auth
rootRouter.post('/verify/profile', checkJWT, auth)  
rootRouter.post('/logout', logout)  

//MyAccount
rootRouter.use('/myaccount',MyaccountRoute)

export default rootRouter