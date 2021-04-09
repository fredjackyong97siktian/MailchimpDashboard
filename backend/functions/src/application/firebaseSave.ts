import {db} from './../intent/index';
import {getRepository,getManager} from 'typeorm';
import {UserAccount} from './../entity/user_account';
import {Platform} from './../entity/platform';
import {Authentication} from './../entity/authentication';
import  {Request, Response} from 'express';
import {AuthenticationService} from '../entity/authenticationservice';
import {Service} from './../entity/service';
import {tasklogRecord} from './tasklog';

interface firebaseDataI {
    userId: string | undefined, 
    application: string,
    applicationId: number,
    data: object,
    businessInformation:object,
    sid: number,
    req : Request,
    res : Response
}

export const firebaseSave = async({userId,application,applicationId,data,businessInformation,sid,req, res} : firebaseDataI) => {
    console.log('Pre Stage')
    console.log('Stage 1')
    const user = await getRepository(UserAccount).findOne({select:['id','user_account_id'],where :{user_account_id: userId}});
    const platform = await getRepository(Platform).findOne({select:['id'],where :{userAccountId: user?.id}});
    //authentication id
    let authenticationId;
    //authentication code
    let authentication_id;
    let ap_id;
    console.log('Stage 2')
    /****** Check on Authentication  ******/
    if(user && platform && sid){
        console.log('Stage 3')
        //Check if the authentication is exist in PostgreSQL
        const authentication = await getRepository(Authentication).findOne({select:['id','authentication_id'],where :{applicationId: applicationId,userAccountId:user.id}});
        if(authentication){
            //If authentication row is exist in table
            console.log('Stage 4')
            await db.collection(user.user_account_id).doc(`/${authentication.authentication_id}/`).collection(`/${application}/`).doc('/credential/').set(data)
            //Assigning the authentication code   
            authentication_id = authentication.authentication_id;
            authenticationId = authentication.id
        } else {
            //If authentication row is not exist in table
            const docRef = await db.collection(user.user_account_id).doc()
            const Authentication_id = docRef.id;
            await docRef.collection(`/${application}/`).doc('/credential/').set(data) 

            const auth = new Authentication();
            auth.authentication_id = Authentication_id
            auth.userAccountId = user.id
            auth.applicationId = applicationId
            auth.platformId = platform?.id;
            await getRepository(Authentication).save(auth); 

            //Assigning the authentication code
            authentication_id = Authentication_id
            const authenticationCheck = await getRepository(Authentication).findOne({select:['id','authentication_id'],where :{authentication_id:Authentication_id}});
            console.log('Check This Please')
            console.log(Authentication_id);
            console.log(authenticationCheck)
            if (authenticationCheck){ authenticationId = authenticationCheck.id }else { throw 'Error Found';}
        }
        
        console.log('Stage 5')
        //Got Problem
        /****** Save into Authentication Service  ******/
        const ap = await getRepository(AuthenticationService).findOne({select:['ap_id'],where :{serviceId: sid,authenticationId:authenticationId}});
        if(!ap){
            //If dun have AuthenticationPermission (Mean it is new)
            console.log('Stage 6')
            //if do not have authenticationPermission
            const docRefService = await db.collection(user.user_account_id).doc(`/${authentication_id}/`).collection(`/${application}/`).doc('/businessInformation/').collection('/ap_id/').doc();
            const ServiceId = docRefService.id;
            console.log(businessInformation);
            await docRefService.collection('/data/').doc(new Date().toUTCString()).set(businessInformation) 

            console.log('Stage 7')
            const AP = new AuthenticationService();
            AP.ap_id = ServiceId
            AP.serviceId = sid
            AP.authenticationId = authenticationId
            await getRepository(AuthenticationService).save(AP);
            console.log('Stage 8')
            ap_id = ServiceId
        }else{
            //If have AuthenticationPermission
            ap_id = ap.ap_id;
            await db.collection(user.user_account_id).doc(`/${authentication_id}/`).collection(`/${application}/`).doc('/businessInformation/')
            .collection('/ap_id/').doc(ap_id).collection('/data/').doc(new Date().toUTCString()).set(businessInformation) ;
            //Update/Append Business Information
            
        }

        console.log('Stage 9')
        /***** Tasklog *****/
        /*await db.collection(user.user_account_id).doc(`/${authentication_id}/`).collection(`/${application}/`).doc('/tasklog/').collection('/data/').doc(new Date().toUTCString()).set({
            service: sid,
            uri: 'not yet'
        });*/

        const path = db.collection(user.user_account_id).doc(`/${authentication_id}/`).collection(`/${application}/`).doc('/tasklog/').collection('/data/').doc(new Date().toUTCString())
        const category = `Connection to Application`
        const detail = `Connecting to ${application} and success`
        const otherDetail = null;
        await tasklogRecord({path,category,detail,otherDetail})
        console.log(ap_id);
        return ap_id;
    }else{
        throw 'User not found'
    }   
}