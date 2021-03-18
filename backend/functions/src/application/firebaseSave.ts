import {db} from './../intent/index';
import {getRepository,getManager} from 'typeorm';
import {UserAccount} from './../entity/user_account';
import {Platform} from './../entity/platform';
import {Authentication} from './../entity/authentication';
import  {Request, Response} from 'express';
import {AuthenticationPermission} from './../entity/authentication_permission';
import {Service} from './../entity/service';
interface firebaseDataI {
    userId: string | undefined, 
    application: string,
    applicationId: number,
    data: object,
    sid: number,
    scope: string,
    req : Request,
    res: Response
}

export const firebaseSave = async({userId,application,applicationId,data,sid,scope,req, res} : firebaseDataI) => {
    console.log('Pre Stage')
    console.log(sid);
    console.log(scope);
    console.log('Stage 1')
    const user = await getRepository(UserAccount).findOne({select:['id','user_account_id'],where :{user_account_id: userId}});
    const platform = await getRepository(Platform).findOne({select:['id'],where :{userAccountId: user?.id}});
    //authentication id
    let authenticationId;
    //authentication code
    let authentication_id;
    let ap_id;
    console.log('Stage 2')
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
        const ap = await getRepository(AuthenticationPermission).findOne({select:['ap_id'],where :{serviceId: sid,authenticationId:authenticationId}});
        if(!ap){
            //If dun have AuthenticationPermission (Mean it is new)
            console.log('Stage 6')
            //if do not have authenticationPermission
            const docRefService = await db.collection(user.user_account_id).doc(`/${authentication_id}/`).collection(`/${application}/`).doc('/businessInformation/').collection('/data/').doc();
            const ServiceId = docRefService.id;
            await docRefService.set({date:'TESTTEST'}) 

            console.log('Stage 7')
            const AP = new AuthenticationPermission();
            AP.ap_id = ServiceId
            AP.serviceId = sid
            AP.authenticationId = authenticationId
            await getRepository(AuthenticationPermission).save(AP);
            console.log('Stage 8')
            ap_id = ServiceId
        }else{
            //If have AuthenticationPermission
            ap_id = ap.ap_id;
            await db.collection(user.user_account_id).doc(`/${authentication_id}/`).collection(`/${application}/`).doc('/businessInformation/').collection('/data/').doc(ap_id).set({date:'TESTTEST'}) ;
            //Update/Append Business Information
            
        }
        console.log('Stage 9')
        await db.collection(user.user_account_id).doc(`/${authentication_id}/`).collection(`/${application}/`).doc('/tasklog/').collection('/data/').doc().set({
            timestamp : new Date(new Date().toUTCString()),
            service: sid,
            scope: scope,
            uri: 'not yet'
        });

 
        //Do the TaskLog Update
            /*  Area to Save Service Repository  */
            //save into Firebase and get ID First
            /* TaskLog Detail
            - Timestamp
            - Service Connect
            - Which URI Used
            - Duration? 
            
            */

    }else{
        throw 'User not found'
    }   
}