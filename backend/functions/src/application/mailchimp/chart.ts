import  {Request, Response} from 'express';
import {datasource} from '../datasource';
import {firebaseSave } from './../firebaseSave';
import axios from 'axios';
import { URLSearchParams } from "url"
import {mailchimpdata} from './data';
import {CdashboardApplication} from '../../intent/dashboard/dashboard';

var config = require('../../../config');
var sid : any;
//userId: string, authenticationId: string, applicationName: string,ap_id: string, method:string
export const SubscribedContacts = async (req : Request, res : Response) => {
    try {
        const data = await datasource(req)
        
        let ReturnData :any= [];
        data.map((item :any)=>{
            ReturnData.push({x:item.timestamp,y:item.businessInformation.data.campaign.total_items});
        })
        res.status(201).json({
            success: true,
            data
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
        const data = await datasource(req)
        let ReturnData :any= [];
        data.map((item :any)=>{
            ReturnData.push({x:item.timestamp,y:item.businessInformation.data.campaign.total_items});
        })
        res.status(201).json({
            success: true,
            data
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
        const data = await datasource(req)
        let ReturnData :any= [];
        data.map((item :any)=>{
            ReturnData.push({x:item.timestamp,y:item.businessInformation.data.campaign.total_items});
        })
        res.status(201).json({
            success: true,
            data
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
        const data = await datasource(req)
        let ReturnData :any= [];
        data.map((item :any)=>{
            ReturnData.push({x:item.timestamp,y:item.businessInformation.data.campaign.total_items});
        })
        res.status(201).json({
            success: true,
            data
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
        const data = await datasource(req)
        let ReturnData :any= [];
        data.map((item :any)=>{
            let link = item.businessInformation.data.campaign.reports;
            if(link.length > 1){
                let yData : number = 0;
                link.map((item:any)=>{
                    if(item.clicks.click_rate){yData = yData + item.clicks.click_rate;}
                })
                yData=yData/link.length
                ReturnData.push({x:item.timestamp,y:yData});
            }else{
                ReturnData = [{x:null,y:null}]
            }
        })
        res.status(201).json({
            success: true,
            ReturnData
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
        const data = await datasource(req)
        let ReturnData :any= [];
        data.map((item :any)=>{
            let link = item.businessInformation.data.campaign.reports;
            if(link.length > 1){
                let yData : number = 0;
                link.map((item:any)=>{
                    if(item.opens.open_rate){yData = yData + item.opens.open_rate;}
                })
                yData=yData/link.length
                ReturnData.push({x:item.timestamp,y:yData});
            }else{
                ReturnData = [{x:null,y:null}]
            }
        })
        res.status(201).json({
            success: true,
            ReturnData
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
        const data = await datasource(req)
        let ReturnData :any= [];
        data.map((item :any)=>{
            let link = item.businessInformation.data.campaign.reports;
            if(link.length > 1){
                let yData : number = 0;
                link.map((item:any)=>{
                    if(item.opens.unique_opens){yData = yData + item.opens.unique_opens;}
                })
                yData=yData/link.length
                ReturnData.push({x:item.timestamp,y:yData});
            }else{
                ReturnData = [{x:null,y:null}]
            }
        })
        res.status(201).json({
            success: true,
            ReturnData
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
        const data = await datasource(req)
        let ReturnData :any= [];
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
                })
                yDataClick=yDataClick/link.length
                yDataOpen=yDataClick/link.length
                yDataUniqueOpen=yDataClick/link.length
                ReturnData.push({'click':yDataClick,'open':yDataOpen,'unique':yDataUniqueOpen});
            }else{
                ReturnData = [{'click':null,'open':null,'unique':null}]
            }
        })
        res.status(201).json({
            success: true,
            ReturnData
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
        const data = await datasource(req)
        
        let ReturnData :any= [];
        data.map((item :any)=>{
            ReturnData.push({x:item.timestamp,y:item.businessInformation.data.campaign.total_items});
        })
        
        res.status(201).json({
            success: true,
            ReturnData
        });
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};  