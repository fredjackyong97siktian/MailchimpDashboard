//Login
import {RNavM} from './controller';
import express, {Request, Response} from 'express';

const router = express.Router();

//connection
/*Application */
router.get('/:platformid/application',RNavM)


/*Favourite */


export default router;