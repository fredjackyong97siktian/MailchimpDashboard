//SignUp
import express  from 'express';
import {GTZohoPeople , ConnectZohoPeople} from './controller';

const router = express.Router();

//router.post('/domain',DomainZohoPeople);
router.get('/callback', GTZohoPeople);
router.get('/connect', ConnectZohoPeople);

export default router;