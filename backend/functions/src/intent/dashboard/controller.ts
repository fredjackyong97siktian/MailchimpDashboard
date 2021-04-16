import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { Dashboard } from '../../entity/dashboard';

export const RDashboardVPM = async (req : Request, res : Response) => {
    try {
        const platform = (req.params.platformid).split('-');
        const dashboard = req.params.dashboardid;
        //authenticationId
        //applicationname
        //ap_Id
        const data = await getRepository(Dashboard)
        .createQueryBuilder('dashboard')
        .leftJoin('dashboard.platform','p')
        .leftJoin('p.userAccount','u')
        .leftJoin('dashboard.visualizationpresentations','vp')
        .leftJoin('vp.visualization','v')
        .leftJoin('v.subchart','s')
        .leftJoin('s.chart','c')
        .leftJoin('c.charttype','ct')
        .leftJoin('v.metrics','m')
        .leftJoin('m.metricsgroup','mg')
        .leftJoin('m.service','ser')
        .leftJoin('ser.application','a')
        .leftJoin('ser.authenticationServices','ass')
        .leftJoin('ass.authentication','auth')
        .select(['dashboard.position','dashboard.dashboard_name','vp.id','vp.visualizationId','vp.selection','v.id','s.reference_component','c.id','ct.name','m.api','m.displayName','mg.name','ser.id','a.name','ass.ap_id','auth.authentication_id'])
        .where('p.platform_id = :pid',{pid:platform[1]})
        .andWhere('u.email = :email',{email:req.user?.email})
        .andWhere('dashboard.dashboard_id =:dashboardid',{dashboardid:dashboard})
        .andWhere('dashboard.isactive = TRUE')
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

export const UDashboardPositionS = async (req : Request, res : Response) => {
    try {
        //const platform = (req.params.platformid).split('-');
        const dashboard = req.params.dashboardid;
        if(!req.body.position){
            throw "Not a valid position"
        }
        /*console.log((req.body.position).some(isNaN))
        if(req.body.position.some(isNaN)){
            throw "Not a valid position"
        }*/
        console.log(req.body.position)
        await getConnection()
        .createQueryBuilder()
        .update(Dashboard)
        .set({
            position: req.body.position
        })
        .where("dashboard_id = :did",{did:dashboard})
        .execute()

        res.status(201).json({
            success: true,
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};