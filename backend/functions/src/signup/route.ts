//SignUp
import express  from 'express';
import {CSignUp} from './controller';

const router = express.Router();

router.post('/', CSignUp);

export default router;