//SignUp Folder
import  {Request, Response} from 'express';
import {firebaseSave} from './../../firebaseSave';
var config = require('../../../../config');
var sid: any
var scope: any
//Create
export const ConnectZohoPeople = async (req : Request, res : Response) => {
    try {
        sid = req.query.id;
        scope = req.query.scope;
        res.redirect(`https://accounts.zoho.com/oauth/v2/auth?scope=${scope}&client_id=1000.NVBOOVBKCSHSNCLEKR7FC5V4TQIUCL&response_type=code&access_type=online&redirect_uri=http://localhost:5001/bsupkit-45126/us-central1/app/api/oauth/app/zoho/people/callback&prompt=consent`)        
    } catch (error) {
        res.redirect(`${config.CLIENT_API}auth/app/complete/fail`)
    }
};

export const GTZohoPeople = async (req : Request, res : Response) => {
    try {
        /* Check if user have connect to this application before */
        /* If Not Connect Before */
        const axios = require('axios');
        const code = req.query.code;
        const accountsServer = req.query['accounts-server'];
        // await db.collection('siktianyong97@gmail.com').doc(info.id).collection('/ZohoPeople/').doc('/credential/').update({granttoken: code})
        const {data} = await axios.post(`${accountsServer}/oauth/v2/token?grant_type=authorization_code&client_id=${config.ZOHO_CLIENT_ID}&client_secret=${config.ZOHO_CLIENT_SECRET}&redirect_uri=${config.ZOHO_REDIRECT_URL}&code=${code}`)
        data.accountServer = accountsServer;
        firebaseSave({userId:req.user?.user_id,application:'ZohoPeople',applicationId:1, sid:sid,scope:scope, data: data ,req:req, res:res})
        res.redirect(`${config.CLIENT_API}auth/app/complete/success`)   
    } catch (error) {
        console.log(error)
        res.redirect(`${config.CLIENT_API}auth/app/complete/fail`)
    }
};

/* Need to do one API that to */


/*export const AccessTZohoPeople = async (req : Request, res : Response) => {
    try {
        //create model and save
        //const userRepository = getRepository(UserAccount)
        //const user = userRepository.create(req.body);
        //const data = await userRepository.save(user);
        const data = 'ha'
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
};*/