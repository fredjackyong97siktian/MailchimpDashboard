//SignUp Folder
import  {Request, Response} from 'express';
import {firebaseConnection} from './../../../firebase'
import {getRepository} from 'typeorm';

var config = require('../../../../config');
//Create
export const DomainZohoPeople = async (req : Request, res : Response) => {
    try {
        console.log('starting')
        //has issue
        const db = firebaseConnection();
        // will put userID here, temporary putting email
        console.log('tick')
        await db.collection('siktianyong97@gmail.com').doc('/ZohoPeople/credential/')
        .create({domain: req.body.domain});
        console.log('tickas')
        res.status(201).json({
            success: true
        });        

    } catch (error) {
        //If Error, then redirect to another place
    }
};

export const GTZohoPeople = async (req : Request, res : Response) => {
    try {
        const code = req.query.code;
        //save the Grant Token into Firebase

        res.redirect(`${config.CLIENT_API}/auth/app/zoho/people/status/${code}`)

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