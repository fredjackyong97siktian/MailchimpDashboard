import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { Category } from '../../../entity/category';
import { AuthenticationPermission } from '../../../entity/authentication_permission';

export const RConnectionM = async (req : Request, res : Response) => {
    try {

        const data = await getRepository(Category)
        .createQueryBuilder('category')
        .select(['category.id','category.name'])
        .leftJoin('category.services', 'services')
        .addSelect(['services.id','services.description','services.service_name'])
        .leftJoin('services.application','application')
        .addSelect(['application.name','application.auth_method','application.direct_url_component','application.imglocation'])
        .getMany()

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

export const RConnectionS = async (req : Request, res : Response) => {
    try {
        console.log(req.user?.email)
        if(req.user){
            const data = await getRepository(AuthenticationPermission)
            .createQueryBuilder('authentication_permission')
            .select(['authentication_permission.id'])
            .leftJoin('authentication_permission.authentication','authentication')
            .addSelect(['authentication.authentication_id','authentication.access_token','authentication.expired_in','authentication.refresh_token'])
            .leftJoin('authentication.userAccount','userAccount')
            .where('userAccount.email = :email',{email: req.user.email})
            .andWhere('authentication_permission.serviceId = :id',{id: req.body.serviceid})
            .getOne()

            res.status(201).json({
                success: true,
                data 
            });
        }else {
            throw 'No User Found';
        }

    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};