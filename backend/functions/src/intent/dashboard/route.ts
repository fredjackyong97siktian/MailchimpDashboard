//Login
import {RDashboardVPM,UDashboardPositionS} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

//connection
/*Application */
router.get('/:platformid/:dashboardid/dashboard',RDashboardVPM)
router.post('/:platformid/:dashboardid/position',UDashboardPositionS)

/*Favourite */


export default router;