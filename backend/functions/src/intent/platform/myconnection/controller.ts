import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { Category } from '../../../entity/category';
import { AuthenticationPermission } from '../../../entity/authentication_permission';
import {Service} from '../../../entity/service';

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
            .addSelect(['authentication.authentication_id'])
            .leftJoin('authentication.userAccount','userAccount')
            .where('userAccount.email = :email',{email: req.user.email})
            .andWhere('authentication_permission.serviceId = :id',{id: req.body.serviceid})
            .getOne()

            console.log(data);
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

export const RConnectionScopeS = async (req : Request, res : Response) => {
    try {
        const data = await getRepository(Service)
        .createQueryBuilder('service')
        .select(['service.service_name'])
        .leftJoin('service.scopes','scopes')
        .addSelect(['scopes.id','scopes.scope_id','scopes.serviceId','scopes.name','scopes.term','scopes.api','scopes.method'])
        .leftJoin('service.application','application')
        .addSelect(['application.name','application.auth_method','application.direct_url_component','application.imglocation'])
        .getOne()
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