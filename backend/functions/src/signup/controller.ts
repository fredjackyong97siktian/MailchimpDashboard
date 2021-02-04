//SignUp Folder
import  {Request, Response} from 'express';
import {createAccount} from './sql/createAccount';

//Create
export const CSignUp = async (req : Request, res : Response) => {
    try {
        const data = await createAccount(req.body);
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