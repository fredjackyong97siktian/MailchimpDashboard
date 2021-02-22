import  {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import { UserAccount } from "./../../entity/user_account";
import { Platform } from "./../../entity/platform";
const bcrypt = require('bcrypt');

export const CPlatformS = async (req : Request, res : Response) => {
    try {
        const userRepository = getRepository(UserAccount)
        const user = await userRepository.findOne({email: req.body.email});
        const platformRepository = getRepository(Platform)

        const platformDetail = new Platform();
        platformDetail.platform_name = req.body.platformname
        platformDetail.company_name = req.body.companyname
        if(user){
            platformDetail.user_account_id = user.id
        }else {
            throw 'User not Found.'
        }
        const product = await platformRepository.save(platformDetail);


        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};