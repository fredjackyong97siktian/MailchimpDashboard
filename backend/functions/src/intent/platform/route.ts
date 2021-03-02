//Login
import {CPlatformS,RPlatformM,RPlatformS} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/',RPlatformM);
router.post('/add', CPlatformS);
router.get('/:platformid',RPlatformS)
export default router;