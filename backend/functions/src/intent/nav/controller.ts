import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { UserAccount } from "../../entity/user_account";
import { Platform } from "../../entity/platform";
import { Category } from '../../entity/category';
import { AuthenticationService } from '../../entity/authenticationservice';

export const RNavM = async (req : Request, res : Response) => {
    try {
        const platform = (req.params.platformid).split('-');
        console.log(platform[0]);
        console.log(platform[1]);

        const data = await getRepository(Category)
        .createQueryBuilder('category')
        .leftJoin('category.services','s')
        .leftJoin('s.authenticationServices','ass')
        .leftJoin('ass.authentication','a')
        .leftJoin('a.platform','p')
        .leftJoin('p.userAccount','u')
        .select(['category.name','s.service_name'])
        .where('p.platform_id = :pid',{pid:platform[1]})
        .andWhere('u.email = :email',{email:req.user?.email})
        .orderBy('category.name','ASC')
        .getMany()

        /*
        .where('p.platform_id = :pid',{pid:platform[1]})
        .andWhere('u.email = :email',{email:'siktiangyong97@gmail.com'})

        - platform
        - authentication 
        - authentication Service
        - Service
        - Category
        */

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