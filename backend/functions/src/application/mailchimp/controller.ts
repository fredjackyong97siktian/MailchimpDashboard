//SignUp Folder
import  {Request, Response} from 'express';
import {firebaseSave } from './../firebaseSave';
var config = require('../../../config');
var oauthClient : any = null;
var sid : any;
var scope : any;

export const CallQuickBookSDK = async (req : Request, res : Response) => {
    try {
        sid = req.query.id;
        scope = req.query.scope;

        var OAuthClient = require('intuit-oauth');

        oauthClient = new OAuthClient({
            clientId: config.QUICKBOOK_CLIENT_ID,            // enter the apps `clientId`
            clientSecret: config.QUICKBOOK_CLIENT_SECRET,    // enter the apps `clientSecret`
            environment: 'sandbox',                          // enter either `sandbox` or `production`
            redirectUri: config.QUICKBOOK_REDIRECT_URL,      // enter the redirectUri
            logging: true                               // by default the value is `false`
        });

        let ScopeObtain;
        switch(req.query.scope){
            case 'OAuthClient.scopes.Accounting':
                ScopeObtain = OAuthClient.scopes.Accounting;
                break;
            case 'OAuthClient.scopes.OpenId':
                ScopeObtain = OAuthClient.scopes.OpenId;
                break;
            case 'OAuthClient.scopes.Profile':
                ScopeObtain = OAuthClient.scopes.Profile;
                break;
            case 'OAuthClient.scopes.Email':
                ScopeObtain = OAuthClient.scopes.Email;
                break;
            case 'OAuthClient.scopes.Phone':
                ScopeObtain = OAuthClient.scopes.Phone;
                break;
            case 'OAuthClient.scopes.Address':    
                ScopeObtain = OAuthClient.scopes.Address;
                break;
            default:
                ScopeObtain = OAuthClient.scopes.Accounting;
                break;
        }
        const authUri = oauthClient.authorizeUri({
            scope: [ScopeObtain],
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
        // Exchange the auth code retrieved from the **req.url** on the redirectUri
        oauthClient
        .createToken(parseRedirect)
        .then(function (authResponse :any) {
            const data = authResponse.getJson();
            firebaseSave({userId:req.user?.user_id,application:'QuickBook',applicationId:2, data: data, sid:sid, scope:scope, req:req, res:res})
        }) 
        res.redirect(`${config.CLIENT_API}auth/app/complete/success`)         
    } catch (error) {
        console.log(error)
        res.redirect(`${config.CLIENT_API}auth/app/complete/fail`)
    }
};