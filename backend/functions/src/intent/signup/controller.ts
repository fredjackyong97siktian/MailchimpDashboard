//SignUp Folder
import  {Request, Response} from 'express';
import {createAccount} from './sql/createAccount';
import {getRepository} from 'typeorm';
import { UserAccount } from "./../../entity/user_account";


//Create
export const CSignUp = async (req : Request, res : Response) => {
    try {
        //create model and save
        const userRepository = getRepository(UserAccount)
        const user = userRepository.create(req.body);
        const data = await userRepository.save(user);

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