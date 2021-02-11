import SignupRoute from './signup/route'
import EmailRoute from './email/route'

import express  from 'express';
const rootRouter = express.Router();

//Public
const public_prefix = '/auth'
rootRouter.use(public_prefix+'/signup',SignupRoute)

//Protected
const private_prefix = '/:platformid'

//Others
rootRouter.use('/email',EmailRoute);





export default rootRouter