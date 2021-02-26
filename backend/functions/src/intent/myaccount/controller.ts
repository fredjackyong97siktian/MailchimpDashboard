import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { UserAccount } from "./../../entity/user_account";
import { Platform } from "./../../entity/platform";
const bcrypt = require('bcrypt');

export const RMyaccountS = async (req : Request, res : Response) => {
    try {
        const userRepository = getRepository(UserAccount);
        const user = await userRepository.find({ select: ["email","firstname", "lastname","address1","address2","city","state","postal_code","country","mobile"],where:{email:req.body.email} });

        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};
