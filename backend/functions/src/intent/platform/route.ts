//Login
import {CPlatformS,RPlatformM,RPlatformS} from './controller';
import {RConnectionM ,RConnectionS, RMetricsM,RapidS,CMetricsM} from './myconnection/controller';
import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/',RPlatformM);
router.post('/add', CPlatformS);
router.get('/:platformid',RPlatformS)

//connection
router.get('/:platformid/myconnection',RConnectionM)
router.post('/:platformid/myconnection/app',RConnectionS)
router.post('/:platformid/myconnection/service/:serviceid',RMetricsM)
router.post('/:platformid/myconnection/metrics',CMetricsM)
router.post('/:platformid/myconnection/apid',RapidS)
export default router;