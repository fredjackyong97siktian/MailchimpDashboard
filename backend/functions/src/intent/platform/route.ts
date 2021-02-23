//Login
import {CPlatformS,RPlatformM} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/',RPlatformM)
router.post('/add', CPlatformS);
export default router;