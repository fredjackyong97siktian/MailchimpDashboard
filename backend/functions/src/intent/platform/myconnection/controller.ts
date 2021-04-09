import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection, Brackets} from 'typeorm';
import { Category } from '../../../entity/category';
import { AuthenticationService} from '../../../entity/authenticationservice';
import {Metrics} from '../../../entity/metrics';
import {Service} from '../../../entity/service';
import {AuthenticationMetrics} from '../../../entity/authenticationmetrics';
import {tasklog, tasklogRecord} from '../../../application/tasklog';

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
        if(req.user){
            const data = await getRepository(AuthenticationService)
            .createQueryBuilder('authenticationservice')
            .select(['authenticationservice.id','authenticationservice.ap_id'])
            .leftJoin('authenticationservice.authentication','authentication')
            .addSelect(['authentication.authentication_id'])
            .leftJoin('authentication.userAccount','userAccount')
            .where('userAccount.email = :email',{email: req.user.email})
            .andWhere('authenticationservice.serviceId = :id',{id: req.body.serviceid})
            .getRawOne()

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

export const RMetricsM = async (req : Request, res : Response) => {
    try {
       // if(req.user){
            const data = await getRepository(Service)
            .createQueryBuilder('service')
            .select(['service.service_name'])
            .leftJoin('service.authenticationServices','asm')
            .leftJoin('service.metrics','m')
            .addSelect(['m.id','m.metrics_id','m.name','m.detail'])
            .leftJoin('m.authenticationMetrics','am')
            .addSelect(['am.id','am.metrics_id'])
            .leftJoin('service.application','a')
            .addSelect(['a.name','a.auth_method','a.direct_url_component','a.imglocation'])
            .where('m.serviceId = :id',{id: req.params.serviceid})
            .andWhere('m.isactive = true')
            .andWhere(new Brackets(qb => {
                qb.where("asm.ap_id = :ap_id", { ap_id: req.body.ap_id })
                  .orWhere('am.authenticationserviceId is null')
            }))
            .orderBy("m.id", "ASC")
            .getOne()
            /*const data = await getRepository(Metrics)
            .createQueryBuilder('metrics')
            .select(['metrics.id','metrics.metrics_id','metrics.name','metrics.detail'])
            .leftJoin('metrics.authenticationMetrics','am')
            .addSelect(['am.metrics_id'])
            .where('metrics.serviceId = :id',{id: req.body.serviceid})
            .andWhere('isactive = true')
            .andWhere(new Brackets(qb => {
                qb.where("am.authenticationserviceId = :id", { id: req.body.authenticationserviceId })
                  .orWhere('am.authenticationserviceId is null')
            }))
            .orderBy("metrics.id", "ASC")
            .getRawMany()*/


            res.status(201).json({
                success: true,
                data 
            });
        //}else {
         //   throw 'No User Found';
        //}

    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};


export const RapidS = async (req : Request, res : Response) => {
    try {
       // if(req.user){            const data = await getRepository(AuthenticationService)
        const data = await getRepository(AuthenticationService)
        .createQueryBuilder('authenticationservice')
        .select(['authenticationservice.id','authenticationservice.ap_id'])
        .leftJoin('authenticationservice.authentication','authentication')
        .addSelect(['authentication.authentication_id'])
        .leftJoin('authentication.userAccount','userAccount')
        .where('authenticationservice.ap_id = :id',{id: req.body.apid})
        .andWhere('userAccount.email = :email',{email: req.user?.email})
        .getOne()

        let Check;
        data? Check = true : Check = false;
            /*const data = await getRepository(Metrics)
            .createQueryBuilder('metrics')
            .select(['metrics.id','metrics.metrics_id','metrics.name','metrics.detail'])
            .leftJoin('metrics.authenticationMetrics','am')
            .addSelect(['am.metrics_id'])
            .where('metrics.serviceId = :id',{id: req.body.serviceid})
            .andWhere('isactive = true')
            .andWhere(new Brackets(qb => {
                qb.where("am.authenticationserviceId = :id", { id: req.body.authenticationserviceId })
                  .orWhere('am.authenticationserviceId is null')
            }))
            .orderBy("metrics.id", "ASC")
            .getRawMany()*/

            res.status(201).json({
                success: true,
                Check 
            });
        //}else {
         //   throw 'No User Found';
        //}

    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};

export const CMetricsM = async (req : Request, res : Response) => {
    try {
       // if(req.user){    
        const email = 'siktianyong97@gmail.com'     
       const asId = await getRepository(AuthenticationService)
       .createQueryBuilder('authenticationservice')
       .select(['authenticationservice.id'])
       .leftJoin('authenticationservice.authentication','authentication')
       .leftJoin('authentication.userAccount','userAccount')
       .where('authenticationservice.ap_id = :id',{id: req.body.service})
       .andWhere('userAccount.email = :email',{email: email})
       .getOne()
       console.log(asId)
       //req.user?.email
        if(asId){
            const metricsID = await getRepository(AuthenticationMetrics)
            .createQueryBuilder('authenticationmetrics')
            .select(['authenticationmetrics.metricsId'])
            .where('authenticationmetrics.authenticationserviceId = :asi',{asi : asId.id})
            .getMany()
        
            let existMetricsId :Array<number> = [];
            metricsID.map((item:any)=>{
                existMetricsId.push(item["metricsId"])
            })

            const Metricstobedeleted = existMetricsId.filter(x=>req.body.metrics.indexOf(x)===-1)
            if(Metricstobedeleted.length>0){
                Metricstobedeleted.map(async(item:number)=>{
                    await getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(AuthenticationMetrics)
                    .where("metricsId = :mId",{mId:item})
                    .andWhere("authenticationserviceId = :asId",{asId:asId.id})
                    .execute()
                })

            }
            const Metricstobeadded = req.body.metrics.filter(x => existMetricsId.indexOf(x) === -1)
            if(Metricstobeadded.length>0){
                Metricstobeadded.map(async(item:number)=>{
                    const AM = new AuthenticationMetrics()
                    AM.metricsId = item;
                    AM.authenticationserviceId = asId.id 
                    await getRepository(AuthenticationMetrics).save(AM)

                })
            }
            //await tasklogRecord()
           res.status(201).json({
            success: true,
        });
        }else{
            throw 'Wrong Input. Try Again'
        }


        //}else {
         //   throw 'No User Found';
        //}

    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};