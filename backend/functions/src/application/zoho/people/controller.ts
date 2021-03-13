//SignUp Folder
import  {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {db} from './../../../intent/index';
var config = require('../../../../config');

//Create
export const DomainZohoPeople = async (req : Request, res : Response) => {
    try {
        //Obtain the data from Postgresql to check if there is previous connection of Zoho
        //check the id with the doc. if exist, then update, else set.

        /* If not exist */
        // will put userID here, temporary putting email
        const docRef = await db.collection('siktianyong97@gmail.com').doc()
        const id = docRef.id;
        //merge is true mean if it is existed, then it will merge with new data
        await docRef.collection('/ZohoPeople/').doc('/credential/').set({domain: req.body.domain})
        res.cookie('atemprorarystoreid',{id:id,domain:req.body.domain})
        /* If exist */
        

        res.status(201).json({
          success:true,
          id
        })    

    } catch (error) {
        //If Error, then redirect to another place
    }
};

export const GTZohoPeople = async (req : Request, res : Response) => {
    try {
        const code = req.query.code;
        //save the Grant Token into Firebase
        const info = req.cookies.atemprorarystoreid
        await db.collection('siktianyong97@gmail.com').doc(info.id).collection('/ZohoPeople/').doc('/credential/').update({granttoken: code})
        res.redirect(`${config.CLIENT_API}auth/app/zoho/people/status/${code}/${info.domain}`)
    } catch (error) {
        //If Error, then redirect to another place
    }
};

export const AccessTZohoPeople = async (req : Request, res : Response) => {
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
};