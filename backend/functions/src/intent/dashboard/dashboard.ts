import {Dashboard} from './../../entity/dashboard';
import { Platform } from '../../entity/platform';
import { getRepository } from 'typeorm';
import { Application } from '../../entity/application';

export const CdashboardApplication = async(serviceId:number,application:string,platformId:number) => {
    /*const platform = req.params.platformid.split("-");
    const platformId = await getRepository(Platform).findOne({select:['id'],where :{platform_id:platform[1]}});*/
    const checkDashboard = await getRepository(Dashboard).findOne({select:['id','isactive'],where :{serviceId:serviceId,platformId:platformId}});
    
    /*It is just not active, how? */
    if(!checkDashboard){
        const dashboard = new Dashboard();
        dashboard.serviceId = serviceId;
        dashboard.platformId = platformId;
        dashboard.dashboard_name = application;

        await getRepository(Dashboard).save(dashboard)
    }
  
}