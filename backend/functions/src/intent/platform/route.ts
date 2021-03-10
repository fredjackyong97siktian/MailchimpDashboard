//Login
import {CPlatformS,RPlatformM,RPlatformS} from './controller';
import {RConnectionM ,RConnectionS} from './myconnection/controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/',RPlatformM);
router.post('/add', CPlatformS);
router.get('/:platformid',RPlatformS)

//connection
router.get('/:platformid/myconnection',RConnectionM)
router.post('/:platformid/myconnection/app',RConnectionS)

export default router;