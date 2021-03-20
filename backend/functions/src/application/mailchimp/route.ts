//SignUp
import express  from 'express';
import {CallMailchimp,CallBackMailchimp} from './controller';

const router = express.Router();

//router.post('/domain',DomainZohoPeople);
router.get('/callback', CallBackMailchimp);
router.get('/connect', CallMailchimp);
//router.post('/connect', AccessTZohoPeople);

export default router;