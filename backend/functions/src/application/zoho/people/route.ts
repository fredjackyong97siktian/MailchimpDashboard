//SignUp
import express  from 'express';
import {GTZohoPeople} from './controller';

const router = express.Router();

//router.post('/domain',DomainZohoPeople);
router.get('/callback', GTZohoPeople);
//router.post('/connect', AccessTZohoPeople);

export default router;