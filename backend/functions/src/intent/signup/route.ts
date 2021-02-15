//SignUp
import express  from 'express';
import {CSignUp} from './controller';

const router = express.Router();

router.post('/add', CSignUp);

export default router;