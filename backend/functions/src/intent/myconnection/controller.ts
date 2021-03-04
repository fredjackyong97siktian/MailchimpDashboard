import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { Category } from '../../entity/category';

export const RConnectionM = async (req : Request, res : Response) => {
    try {

        const data = await getRepository(Category)
        .createQueryBuilder('category')
        .select('category.name')
        .leftJoin('category.services', 'services')
        .addSelect(['services.description'])
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