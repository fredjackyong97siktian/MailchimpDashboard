//SignUp Folder
import  {Request, Response} from 'express';
import {getRepository,getManager} from 'typeorm';
import {Authentication} from './../../../entity/authentication';
import {AuthenticationPermission} from './../../../entity/authentication_permission';
import {UserAccount} from './../../../entity/user_account';
import {Platform} from './../../../entity/platform';
import {Application} from './../../../entity/application';
import {db} from './../../../intent/index';
var config = require('../../../../config');

//Create
/*export const DomainZohoPeople = async (req : Request, res : Response) => {
    try {
        //Obtain the data from Postgresql to check if there is previous connection of Zoho
        //check the id with the doc. if exist, then update, else set.

        /* If not exist */
        // will put userID here, temporary putting email
        //const docRef = await db.collection('siktianyong97@gmail.com').doc()
        //const id = docRef.id;
        //merge is true mean if it is existed, then it will merge with new data
        //await docRef.collection('/ZohoPeople/').doc('/credential/').set({domain: req.body.domain})
        //res.cookie('atemprorarystoreid',{id:id,domain:req.body.domain})
        /* If exist */
        

        /*res.status(201).json({
          success:true,
         // id
        })    

    } catch (error) {
        //If Error, then redirect to another place
    }
};*/

export const GTZohoPeople = async (req : Request, res : Response) => {
    try {
        /* Check if user have connect to this application before */
        /* If Not Connect Before */
        const user = await getRepository(UserAccount).findOne({select:['id','user_account_id'],where :{user_account_id: req.user?.user_id}});
        const platform = await getRepository(Platform).findOne({select:['id'],where :{userAccountId: user?.id}});
        console.log(user)
        if(user && platform ){
            const axios = require('axios');
            console.log(req.query)
            const code = req.query.code;
            const accountsServer = req.query['accounts-server'];
            
            // await db.collection('siktianyong97@gmail.com').doc(info.id).collection('/ZohoPeople/').doc('/credential/').update({granttoken: code})
            const {data} = await axios.post(`${accountsServer}/oauth/v2/token?grant_type=authorization_code&client_id=${config.ZOHO_CLIENT_ID}&client_secret=${config.ZOHO_CLIENT_SECRET}&redirect_uri=${config.ZOHO_REDIRECT_URL}&code=${code}`)
            data.accountServer = accountsServer;
            //save the Grant Token into Firebase
            const docRef = await db.collection(user.user_account_id).doc()
            const Authentication_id = docRef.id;
            await docRef.collection('/ZohoPeople/').doc('/credential/').set(data)

            //save the id into authentication

            const auth = new Authentication();
            auth.authentication_id = Authentication_id
            auth.userAccountId = user.id
            //can create a collection of object that store the information of application
            auth.applicationId = 1
            //If used for mutiple platform, this shuld be changed
            auth.platformId = platform?.id;
            await getRepository(Authentication).save(auth);     

        } else {
            throw 'User not Found.'
        }            
            /*If Connect Before*/
            /* Just Update Access Token*/
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