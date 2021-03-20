import  {Request, Response} from 'express';
import {createConnection, getRepository , getManager , getConnection, Connection} from 'typeorm';
import { UserAccount } from "./../../entity/user_account";
import { Platform } from "./../../entity/platform";
const jwtDecode = require('jwt-decode');
const bcrypt = require('bcrypt');

export const RMyaccountProfileS = async (req : Request, res : Response) => {
    try {
        console.log('myaccount')
        console.log(req.body);
        const userRepository = getRepository(UserAccount);
        const user = await userRepository.find({ select: ["email","firstname", "lastname","address1","address2","city","state","postal_code","country","mobile"],where:{email:req.body.email} });

        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};

export const UMyaccountProfileS = async (req : Request, res : Response) => {
    try {

        delete req.body.email;
        await getRepository(UserAccount).update({user_account_id:req.user?.user_id},req.body);   
   
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

export const UMyaccountChangePasswordS = async (req : Request, res : Response) => {
    try {
        const user = await getRepository(UserAccount).findOne({email: req.user?.email});
        let passwordsMatch = false;
        if(user ){
            passwordsMatch = await bcrypt.compare(req.body.oldpassword, user.password)    
        }
        console.log('PasswordMatch')
        console.log(passwordsMatch)
        if(passwordsMatch && user){
            await getRepository(UserAccount).update({user_account_id:req.user?.user_id},{password:req.body.password}); 
        }else{
            throw 'Password is not matched'
        }
        console.log('Passed')       
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