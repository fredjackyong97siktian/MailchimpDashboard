//Login
import {CForgetPasswordS, RForgetPasswordCodeS, UForgetPasswordS} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/create',CForgetPasswordS)
router.post('/read',RForgetPasswordCodeS)
router.post('/update',UForgetPasswordS)
export default router;