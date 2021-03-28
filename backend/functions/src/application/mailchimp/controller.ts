//SignUp Folder
import  {Request, Response} from 'express';
import {firebaseSave } from './../firebaseSave';
import axios from 'axios';
import { URLSearchParams } from "url"
var config = require('../../../config');
var sid : any;
export const CallMailchimp = async (req : Request, res : Response) => {
    try {
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
        const ap_id = await firebaseSave({userId:'133U1SkGdD7ZjE66ALNX4TS26',application:'Mailchimp',applicationId:1, data: data, sid:sid, req:req, res:res})
        console.log('check this one')
        console.log(ap_id);
        //put authenticationservice code and name after success.
        res.redirect(`${config.CLIENT_API}auth/app/complete/success?aid=Mailchimp&uid=${ap_id}`)         
    } catch (error) {
        console.log(error)
        res.redirect(`${config.CLIENT_API}auth/app/complete/fail`)
    }
};