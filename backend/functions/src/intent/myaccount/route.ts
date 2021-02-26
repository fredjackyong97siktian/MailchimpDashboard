//Login
import {RMyaccountS} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/edit',RMyaccountS)
export default router;