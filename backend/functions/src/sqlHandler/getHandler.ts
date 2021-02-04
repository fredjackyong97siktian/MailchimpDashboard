import  express , {Request, Response} from 'express';

const router = express.Router();

export const GET = (url: string, handler: (req: any) => any) => {
    router.get(url, async (req : Request, res : Response) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

export const POST = (url: string, handler: (req: any) => any) => {
    router.post(url, async (req : Request, res : Response) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}
