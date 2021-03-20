//Login
import {RMyaccountProfileS, UMyaccountProfileS, UMyaccountChangePasswordS} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/edit',RMyaccountProfileS)
router.post('/update',UMyaccountProfileS)
router.post('/changepassword',UMyaccountChangePasswordS)
export default router;