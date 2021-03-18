//SignUp
import express  from 'express';
import {CallQuickBookSDK,CallBackQuickBookSDK} from './controller';

const router = express.Router();

//router.post('/domain',DomainZohoPeople);
router.get('/callback', CallBackQuickBookSDK);
router.get('/connect', CallQuickBookSDK);
//router.post('/connect', AccessTZohoPeople);

export default router;