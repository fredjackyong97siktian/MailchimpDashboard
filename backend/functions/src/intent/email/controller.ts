//SignUp Folder
import  {Request, Response} from 'express';
import {readEmailS, readEmailVerificationS , readEmailCodeS} from './sql/readEmailS';
import {updateEmailVerification} from './sql/updateEmail';
import {emailsender} from './emailsender';
import {saltHashPasswordSalt} from './../crypto/encryption_method';

var config = require('./../../../config');
//Create
export const REmailS = async (req : Request, res : Response) => {
    try {
        const data = await readEmailS(req.body);
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

export const REmailVerificationS = async (req : Request, res : Response) => {
    try {
        const emailcode = await readEmailVerificationS(req.body);
        const data = emailcode[0]['email_verification_code']
        const reply = emailsender(req.body.email, data);
        res.status(201).json({
            success: true,
            reply
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};

export const UEmailVerification = async (req : Request, res: Response)=> {
    try {
        //emailsalt = salt    email = hash_email    verificationid = email code
        const {emailsalt, email , verificationid} = req.params;
        //email from database
        const email_database = await readEmailCodeS(verificationid);
        //hashing with emailsalt
        const email_hash = saltHashPasswordSalt(email_database[0]['email'],emailsalt);
        if (email_hash.hash !== email) {
            throw new Error('Invalid Address');
        } 
        await updateEmailVerification(verificationid);
        res.writeHead(301,
            {Location: config.CLIENT_API+'auth/signup/success'}
          );
        res.end();
    } catch (error) {
        res.writeHead(301,
            {Location: config.CLIENT_API+'auth/signup/error/'+error.message}
          );
    }  
}