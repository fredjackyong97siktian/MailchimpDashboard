import  {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import { user_account } from "./../../entity/user_account";
import {createJWTToken} from "./../../jwt";
const jwtDecode = require('jwt-decode');
const bcrypt = require('bcrypt');

export const RLoginS = async (req : Request, res : Response) => {
    try {
        const userRepository = getRepository(user_account)
        const user = await userRepository.findOne({email: req.body.email});
        let passwordsMatch = false;
        if(user){
            passwordsMatch = await bcrypt.compare(req.body.password, user.password)    
        }

        //JWT
        let JWT = {}
        if(passwordsMatch && user){
            const userInfo = {
                user_id : user.user_account_id,
                email: user.email,
            }
            //use userInfo to create JWTToken
            const jwtToken = createJWTToken(userInfo);
            const decodedToken = jwtDecode(jwtToken);
            const expiresAt = decodedToken.exp;

            JWT = {
                jwtToken: jwtToken,
                userInfo: userInfo,
                expiresAt: expiresAt,
            }
            res.cookie('jwtToken',jwtToken, {
                expires: new Date(new Date().getTime() + 5 * 1000),
                httpOnly: true,
                //secure:true
            })

        }
    
        res.status(201).json({
            success: true,
            passwordsMatch,
            JWT
        });
    } catch (error) {
        res.status(409).json({
            success: false,
            error: error.message || error
        });
    }
};