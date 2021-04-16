//Login
import {CPlatformS} from './controller';

import express, {Request, Response} from 'express';

const router = express.Router();

router.post('/add', CPlatformS);


export default router;