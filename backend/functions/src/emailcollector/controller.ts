//SignUp Folder
import  {Request, Response} from 'express';
import {readEmailM} from './sql/readEmailM';

//Create
export const REmailM = async (req : Request, res : Response) => {
    //const {email } = req.body;

    try {
        const data = await readEmailM(req.body);
        res.status(201).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};