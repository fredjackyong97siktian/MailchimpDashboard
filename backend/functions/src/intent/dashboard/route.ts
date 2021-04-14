//Login
import {RDashboardVPM} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

//connection
/*Application */
router.get('/:platformid/:dashboardid',RDashboardVPM)


/*Favourite */


export default router;