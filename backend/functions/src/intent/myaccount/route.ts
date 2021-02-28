//Login
import {RMyaccountProfileS, UMyaccountProfileS} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/edit',RMyaccountProfileS)
router.post('/update',UMyaccountProfileS)
export default router;