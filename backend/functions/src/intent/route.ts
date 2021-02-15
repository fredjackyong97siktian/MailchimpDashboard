import SignupRoute from './signup/route'
import EmailRoute from './email/route'
import FBRoute from './login/fb_oauth/route'
import LoginRoute from './login/route'

import express  from 'express';
const rootRouter = express.Router();

//Public
const public_prefix = '/auth'
rootRouter.use(public_prefix+'/signup',SignupRoute)
rootRouter.use(public_prefix+'/login',LoginRoute)
//Protected
//const private_prefix = '/:platformid'

//Others
rootRouter.use('/email',EmailRoute);

//Facebook
const third_party = '/oauth'
rootRouter.use(third_party+'/signup', FBRoute);

export default rootRouter