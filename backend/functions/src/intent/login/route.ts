//Login
import {RLoginS} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/read', RLoginS);

export default router;