//SignUp Folder
import  {Request, Response} from 'express';
import {firebaseSave} from './../firebaseSave';
var config = require('../../../config');
var oauthClient : any = null;

export const CallQuickBookSDK = async (req : Request, res : Response) => {
    try {

        var OAuthClient = require('intuit-oauth');

        oauthClient = new OAuthClient({
            clientId: config.QUICKBOOK_CLIENT_ID,            // enter the apps `clientId`
            clientSecret: config.QUICKBOOK_CLIENT_SECRET,    // enter the apps `clientSecret`
            environment: 'sandbox',                          // enter either `sandbox` or `production`
            redirectUri: config.QUICKBOOK_REDIRECT_URL,      // enter the redirectUri
            logging: true                               // by default the value is `false`
        });

        const authUri = oauthClient.authorizeUri({
            scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
            state: 'testState',
          }); // can be an array of multiple scopes ex : {scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId]}
           
          // Redirect the authUri
          res.redirect(authUri);
    } catch (error) {
        console.log(error)
        res.status(409).json({
            success: false
        });
    }
};

export const CallBackQuickBookSDK = async (req : Request, res : Response) => {
    try {
        const parseRedirect = req.url;
        console.log('This is Ridi');
        console.log(parseRedirect);
        // Exchange the auth code retrieved from the **req.url** on the redirectUri
        oauthClient
        .createToken(parseRedirect)
        .then(function (authResponse :any) {
            const data = authResponse.getJson();
            console.log(req.user?.user_id)
            const firebaseData = firebaseSave({userId:req.user?.user_id,application:'QuickBook',applicationId:2, data: data})
            if (firebaseData){res.redirect(`${config.CLIENT_API}auth/app/complete/success`) } else { throw 'User not found' }

        })
        .catch(function (e:any) {
            console.error('The error message is :' + e.originalMessage);
            console.error(e.intuit_tid);
        });  
        res.redirect(`${config.CLIENT_API}auth/app/complete/success`)         
    } catch (error) {
        console.log(error)
        res.redirect(`${config.CLIENT_API}auth/app/complete/fail`)
    }
};