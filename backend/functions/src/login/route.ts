//Login
import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/', (req:Request,res: Response) => {
    res.send('This??');
});

export default router;