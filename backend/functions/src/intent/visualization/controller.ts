import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { UserAccount } from "../../entity/user_account";
import { Platform } from "../../entity/platform";
const bcrypt = require('bcrypt');

export const CPlatformS = async (req : Request, res : Response) => {
    try {

        const entityManager = getManager();
        const user = await entityManager.findOne(UserAccount,{user_account_id: req.user?.user_id});
        const platformRepository = getRepository(Platform)

        const platformDetail = new Platform();
        platformDetail.platform_name = req.body.platformname
        platformDetail.company_name = req.body.companyname
        if(user){
            platformDetail.userAccountId = user.id
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