//SignUp Folder
import  {Request, Response} from 'express';
import {firebaseSave } from './../firebaseSave';
import axios from 'axios';
import { URLSearchParams } from "url"
import {mailchimpdata} from './data';
import {CdashboardApplication} from '../../intent/dashboard/dashboard';

var config = require('../../../config');
var sid : any;
export const CallMailchimp = async (req : Request, res : Response) => {
    try {
        /*Better to save it somewhere, else it will overwrite by someone!! */
        sid = req.query.id;
        res.redirect(`https://login.mailchimp.com/oauth2/authorize?response_type=code&client_id=${config.MAILCHIMP_CLIENT_ID}&redirect_uri=${config.MAILCHIMP_REDIRECT_URL}`);
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};

export const CallBackMailchimp = async (req : Request, res : Response) => {
    try {
          const code = (req.query as any).code
          const tokenDetail = {
            grant_type: "authorization_code",
            client_id: config.MAILCHIMP_CLIENT_ID,
            client_secret: config.MAILCHIMP_CLIENT_SECRET,
            redirect_uri: config.MAILCHIMP_REDIRECT_URL,
            code : code
        }
        /********************************** Need to save access token and server prefix ********************************** */
        const {data} = await axios.post("https://login.mailchimp.com/oauth2/token",new URLSearchParams(tokenDetail))
        //userId:req.user?.user_id
        console.log('checking this one first')
        //extract business information
        const businessInformation = await mailchimpdata({apiKey:data.access_token, server:"us1"})
        //save all the important information
        const [ap_id,platformId] = await firebaseSave({userId:'Uds9El49yPv6ZvTNOWxPav93o',application:'Mailchimp',applicationId:1, data: data,businessInformation:businessInformation, sid:sid, req:req, res:res})
        //create dashboard
        await CdashboardApplication(sid,'Mailchimp',platformId)
        console.log('check this one')
        console.log(ap_id);
        //put authenticationservice code and name after success.
        res.redirect(`${config.CLIENT_API}auth/app/complete/success?aid=Mailchimp&uid=${ap_id}`)         
    } catch (error) {
        console.log(error)
        res.redirect(`${config.CLIENT_API}auth/app/complete/fail`)
    }
};