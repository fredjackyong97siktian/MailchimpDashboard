import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { UserAccount } from "./../../entity/user_account";
import { Platform } from "./../../entity/platform";
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

export const RPlatformM = async (req : Request, res : Response) => {
    try {   
        console.log(req.body.email)
        const user = await getRepository(UserAccount).findOne({select:["id"],where:{email:req.body.email}});
        console.log(user);
        if(user){
            const platformRepository = getRepository(Platform);
            const platformDetail = await platformRepository.find({select: ["platform_name","platform_id"],where: {user_account_id: user.id},order:{id:"DESC"},cache:true});
            
            res.status(201).json({
                success: true,
                platformDetail
            });
        } else {
            throw "User Not Found, Please Try Again"
        }

    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};