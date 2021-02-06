//SignUp
import express  from 'express';
import {REmailM} from './controller';

const router = express.Router();

router.post('/', REmailM);

export default router;