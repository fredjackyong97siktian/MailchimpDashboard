import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection, Brackets} from 'typeorm';
import { Category } from '../../../entity/category';
import { AuthenticationService} from '../../../entity/authenticationservice';
import {Metrics} from '../../../entity/metrics';
import {Service} from '../../../entity/service';
import {AuthenticationMetrics} from '../../../entity/authenticationmetrics';
import {tasklogRecord} from '../../../application/tasklog';
import { Authentication } from '../../../entity/authentication';
import {db} from '../../index';
import { VisualizationPresentation } from '../../../entity/visualizationpresentation';
import { Platform } from '../../../entity/platform';
import { Dashboard } from '../../../entity/dashboard';
import { Visualization } from '../../../entity/visualization';
/*DELETE from visualizationpresentation;
DELETE from authenticationmetrics;
UPDATE dashboard SET position = ARRAY[]::integer[]; */
const UpdateDashboard = (dashboardPosition:Array<number>,dashboardId:number) => {
    console.log('finally');
    console.log(dashboardPosition);

    getConnection()
    .createQueryBuilder()
    .update(Dashboard)
    .set({ 
        position: dashboardPosition, 
    })
    .where("id = :id", { id: dashboardId })
    .execute();
}

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
        //if(req.user){
        const email = 'siktianyong97@gmail.com'
        /*Get the DashboardId */
        //dashboardID
        console.log('entering my connection')
        /* Get the available position number */
        //position number
        const dashboardId = await getRepository(Dashboard)
        .createQueryBuilder('dashboard')
        .select(['dashboard.id','dashboard.position'])
        .leftJoin('dashboard.service','s')
        .leftJoin('s.authenticationServices','as')
        .where('as.ap_id = :id',{id:req.body.service})
        .getOne()

        console.log(dashboardId)

        if(!dashboardId){
            throw "No Dashboard Found"
        } 

        const asId = await getRepository(AuthenticationService)
        .createQueryBuilder('authenticationservice')
        .select(['authenticationservice.id'])
        .leftJoin('authenticationservice.authentication','authentication')
        .addSelect(['authentication.authentication_id'])
        .leftJoin('authentication.userAccount','userAccount')
        .leftJoin('authentication.application','application')
        .addSelect(['application.name'])
        .where('authenticationservice.ap_id = :id',{id: req.body.service})
        .andWhere('userAccount.email = :email',{email: req.user?.email})
        .getOne()

        if(!asId){
            throw "No Application Connection Found"
        } 


       //req.user?.email
            if(asId && dashboardId){
                let dashboardPosition = dashboardId.position;
                console.log('position')
                console.log(dashboardPosition)
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
                        const deletedTest = await getRepository(AuthenticationMetrics)
                        .createQueryBuilder('authenticationmetrics')
                        .leftJoin('authenticationmetrics.visualizationpresentation','avp')
                        .select(['avp.id'])
                        .where("authenticationmetrics.metricsId = :mId",{mId:item})
                        .andWhere("authenticationmetrics.authenticationserviceId = :asId",{asId:asId.id})
                        .execute()

                        console.log(deletedTest[0].avp_id);
                        const deleted = await getConnection()
                        .createQueryBuilder()
                        .delete()
                        .from(AuthenticationMetrics)
                        .where("metricsId = :mId",{mId:item})
                        .andWhere("authenticationserviceId = :asId",{asId:asId.id})
                        .execute()
                        
                        const index = dashboardPosition.indexOf(deletedTest[0].avp_id)
                        if (index > -1) {
                            dashboardPosition.splice(index, 1);
                        }
                        console.log('DELETING')
                        console.log(dashboardPosition)
                        await UpdateDashboard(dashboardPosition,dashboardId.id)
                    })
                }
                const Metricstobeadded = req.body.metrics.filter(x => existMetricsId.indexOf(x) === -1)
                if(Metricstobeadded.length>0){
                    Metricstobeadded.map(async(item:number)=>{
                        var vp = await getRepository(Visualization)
                        .createQueryBuilder('visualization')
                        .select(['visualization.id'])
                        .leftJoin('visualization.metrics','vm')
                        .where('vm.id = :item',{item:item})
                        .andWhere('visualization.isDefault = TRUE')
                        .getOne()

                        if(vp){            
                            const AMID = await getConnection()
                            .createQueryBuilder()
                            .insert()
                            .into(AuthenticationMetrics)
                            .values([
                                { metricsId: item, authenticationserviceId: asId.id }
                            ])
                            .returning("id")
                            .execute();

                            console.log('showing AMID')
                            console.log(AMID.generatedMaps[0].id)

                            /*const VP = new VisualizationPresentation()
                            VP.visualizationId = vp.id;
                            VP.dashboardId = dashboardId.id;
                            VP.authenticationmetricsId = AMID.generatedMaps[0].id*/

                            const VPID = await getConnection()
                            .createQueryBuilder()
                            .insert()
                            .into(VisualizationPresentation)
                            .values([
                                {   visualizationId : vp.id,
                                    dashboardId : dashboardId.id,
                                    authenticationmetricsId : AMID.generatedMaps[0].id}
                            ])
                            .returning("id")
                            .execute();
                            console.log(VPID.generatedMaps[0].id)
                            dashboardPosition.push(VPID.generatedMaps[0].id)

                            console.log('Adding');
                            console.log(dashboardPosition);

                            await UpdateDashboard(dashboardPosition,dashboardId.id)
                        } else {
                            throw "No Metrics Found"
                        }
                    })
                    /*Finish the looping of both deleted and added */


                }


            const path = db.collection(req.user?.user_id).doc(`/${asId.authentication.authentication_id}/`).collection(`/${asId.authentication.application.name}/`).doc('/tasklog/').collection('/data/').doc(new Date().toUTCString())
            const category = `Metrics Selection`
            const detail = `Select ${asId.authentication.application.name}'s ${req.body.metrics}`
            const otherDetail = null;
            await tasklogRecord({path,category,detail,otherDetail})
            
            res.status(201).json({
                success: true,
            });
            }else{
                throw 'Wrong Input. Try Again'
            }

            /*res.status(201).json({
                success: true,
                asId
            });*/
        //}else {
        //    throw 'No User Found';
        //}
        res.status(201).json({
            success: true,
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};