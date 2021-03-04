//Login
import {RConnectionM} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/',RConnectionM)
export default router;