import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { Dashboard } from '../../entity/dashboard';

export const RDashboardVPM = async (req : Request, res : Response) => {
    try {
        const platform = (req.params.platformid).split('-');
        const dashboard = req.params.dashboardid;

        const data = await getRepository(Dashboard)
        .createQueryBuilder('dashboard')
        .leftJoin('dashboard.platform','p')
        .leftJoin('p.userAccount','u')
        .leftJoin('dashboard.visualizationpresentations','vp')
        .leftJoin('vp.visualization','v')
        .leftJoin('v.metrics','m')
        .leftJoin('v.subchart','s')
        .select(['dashboard.position','dashboard.dashboard_name','vp.id','vp.visualizationId'])
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