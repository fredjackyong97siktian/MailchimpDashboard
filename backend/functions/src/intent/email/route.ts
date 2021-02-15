//SignUp
import express  from 'express';
import {REmailS, REmailVerificationS, UEmailVerification} from './controller';

const router = express.Router();

router.post('/', REmailS);
router.post('/verification', REmailVerificationS);
router.get('/verify/:emailsalt/:email/:verificationid',UEmailVerification);

export default router;