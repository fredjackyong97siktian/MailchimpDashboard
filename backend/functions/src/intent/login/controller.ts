import  {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import { user_account } from "./../../entity/user_account";
import {setToken} from './setToken';
const bcrypt = require('bcrypt');

export const RLoginS = async (req : Request, res : Response) => {
    try {
        const userRepository = getRepository(user_account)
        const user = await userRepository.findOne({email: req.body.email});
        let passwordsMatch = false;
        if(user){
            passwordsMatch = await bcrypt.compare(req.body.password, user.password)    
        }

        //JWT
        let JWT = {}
        if(passwordsMatch && user){
            JWT = setToken(user,res);
        }

        res.status(201).json({
            success: true,
            passwordsMatch,
            JWT
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};