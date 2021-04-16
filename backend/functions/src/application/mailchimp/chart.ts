import  {Request, Response} from 'express';
import {datasource} from '../datasource';
import {MailChimpFilter,access} from './support';

var config = require('../../../config');
var sid : any;
/*Campaign */
//Report
const CampaigndimensionalReport = ["businessInformation","data","campaign","reports"]
//Selection
const CampaigndimensionalSelection = ["campaign_title"]

/*Audience */
//List
const AudiencedimensionalList = ["businessInformation","data","audience","lists"]
//Selection
const AudiencedimensionalSelection = ["name"]


//userId: string, authenticationId: string, applicationName: string,ap_id: string, method:string
export const SubscribedContacts = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        const dimensiondalData = ["stats","member_count"]
        //Filter and obtain the Seleciton and Click Rate Data
        const result = await MailChimpFilter(data,AudiencedimensionalList,dimensiondalData,AudiencedimensionalSelection,query.selection)
        
        res.status(201).json({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};

export const UnsubscribedContacts = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        const dimensiondalData = ["stats","unsubscribe_count"]
        //Filter and obtain the Seleciton and Click Rate Data
        const result = await MailChimpFilter(data,AudiencedimensionalList,dimensiondalData,AudiencedimensionalSelection,query.selection)
        
        res.status(201).json({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};

export const AudiencePerformance = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        let returnData :any= [];
        let selectionList : Array<string> = [];
        data.map((item :any)=>{
            let link = item.businessInformation.data.audience.lists;
            if(link.length > 1){
                let ymember : number = 0;
                let yunsubscribe : number = 0;
                link.map((item:any)=>{
                    if(item.opens.unique_opens){ymember = ymember + item.stats.member_count;}
                    if(item.opens.unique_opens){yunsubscribe = yunsubscribe + item.stats.unsubscribe_count;}
                    selectionList.includes(CampaigndimensionalSelection.reduce(access,item)) && selectionList.push(CampaigndimensionalSelection.reduce(access,item))
                })

                returnData.push({'subcribe':ymember,'unsubscribe':yunsubscribe});
            }
        })

        const result = {selectionList,returnData}
        res.status(201).json({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  

export const TotalAudience = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        let returnData :any= [];
        data.map((item :any)=>{
            returnData.push({x:item.timestamp,y:item.businessInformation.data.audience.total_items});
        })
        res.status(201).json({
            success: true,
            returnData
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  

/*TEST REQUIRED */
export const ClickRatebyCampaign = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        //Obtain Data Source
        const data = await datasource(req)
        const dimensiondalData = ["opens","open_rate"]
        //Filter and obtain the Seleciton and Click Rate Data
        const result = await MailChimpFilter(data,CampaigndimensionalReport,dimensiondalData,CampaigndimensionalSelection,query.selection)

        res.status(201).json({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  
/*TEST REQUIRED */
export const OpenRatebyCampaign = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        const dimensiondalData = ["opens","open_rate"]
        //Filter and obtain the Seleciton and Click Rate Data
        const result = await MailChimpFilter(data,CampaigndimensionalReport,dimensiondalData,CampaigndimensionalSelection,query.selection)

        res.status(201).json({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  
/*TEST REQUIRED */
/*Able to Filter Campaign */
export const UniqueOpensbyCampaign = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        const dimensiondalData = ["opens","open_rate"]
        //Filter and obtain the Seleciton and Click Rate Data
        const result = await MailChimpFilter(data,CampaigndimensionalReport,dimensiondalData,CampaigndimensionalSelection,query.selection)

        res.status(201).json({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  

export const CampaignPerformance = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        let returnData :any= [];
        let selectionList : Array<string> = [];
        data.map((item :any)=>{
            let link = item.businessInformation.data.campaign.reports;
            if(link.length > 1){
                let yDataClick : number = 0;
                let yDataOpen : number = 0;
                let yDataUniqueOpen : number = 0;
                link.map((item:any)=>{
                    if(item.opens.unique_opens){yDataClick = yDataClick + item.clicks.click_rate;}
                    if(item.opens.unique_opens){yDataOpen = yDataOpen + item.opens.open_rate;}
                    if(item.opens.unique_opens){yDataUniqueOpen = yDataUniqueOpen + item.opens.unique_opens;}
                    selectionList.includes(CampaigndimensionalSelection.reduce(access,item)) && selectionList.push(CampaigndimensionalSelection.reduce(access,item))
                })
                yDataClick=yDataClick/link.length
                yDataOpen=yDataClick/link.length
                yDataUniqueOpen=yDataClick/link.length
                returnData.push({'click':yDataClick,'open':yDataOpen,'unique':yDataUniqueOpen});
            }
        })

        const result = {selectionList,returnData}
        res.status(201).json({
            success: true,
            result
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  

export const TotalCampaign = async (req : Request, res : Response) => {
    try {
        const query = (req.query as any)
        const data = await datasource(req)
        
        let returnData :any= [];
        data.map((item :any)=>{
            returnData.push({x:item.timestamp,y:item.businessInformation.data.campaign.total_items});
        })
        
        res.status(201).json({
            success: true,
            returnData
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  