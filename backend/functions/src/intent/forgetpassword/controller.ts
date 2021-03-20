import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { UserAccount } from "./../../entity/user_account";
import { Platform } from "./../../entity/platform";
const jwtDecode = require('jwt-decode');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

//Create forget password code and send email
export const CForgetPasswordS = async (req : Request, res : Response) => {
    try {
        const passwordcode = uuidv4();
        await getRepository(UserAccount).update({email:req.body.email},{forget_passcode:passwordcode,forget_passcode_receive_at:new Date(new Date().toUTCString())});

        res.status(201).json({
            success: true,
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};

//Read the Code if it is exist
export const RForgetPasswordCodeS = async (req : Request, res : Response) => {
    try {

        const validation = await getRepository(UserAccount).findOne({select:['user_account_id'],where: {forget_passcode : req.body.passwordcode}})
        if (validation){
            res.status(201).json({
                success: true,
            });
        }else{
            throw 'No User Found'
        }

        
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};

export const UForgetPasswordS = async (req : Request, res : Response) => {
    try {
        /* Need to check the password date code if it is within 1 hrs */
        await getRepository(UserAccount).update({forget_passcode : req.body.passwordcode,user_account_id: req.body.user_account_id},{password:req.body.password});   
   
        res.status(201).json({
            success: true,
        });
        
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};