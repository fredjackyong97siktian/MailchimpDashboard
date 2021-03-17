import {db} from './../intent/index';
import {getRepository,getManager} from 'typeorm';
import {UserAccount} from './../entity/user_account';
import {Platform} from './../entity/platform';
import {Authentication} from './../entity/authentication';
import  {Request, Response} from 'express';
import {AuthenticationPermission} from './../entity/authentication_permission';
interface firebaseDataI {
    userId: string | undefined, 
    application: string,
    applicationId: number,
    data: object
}
/*export const scopeSave = async(res :Response)=> {
    res.cookie('Scope',

}*/

export const firebaseSave = async({userId,application,applicationId,data} : firebaseDataI) => {
    try {
        const user = await getRepository(UserAccount).findOne({select:['id','user_account_id'],where :{user_account_id: userId}});
        const platform = await getRepository(Platform).findOne({select:['id'],where :{userAccountId: user?.id}});
        if(user && platform){
            const authentication = await getRepository(Authentication).findOne({select:['authentication_id'],where :{applicationId: applicationId}});
            if(authentication){
                await db.collection(user.user_account_id).doc(authentication.authentication_id).collection(`/${application}/`).doc('/credential/').set(data)
               
            } else {
                const docRef = await db.collection(user.user_account_id).doc()
                const Authentication_id = docRef.id;
                await docRef.collection(`/${application}/`).doc('/credential/').set(data) 

                const auth = new Authentication();
                auth.authentication_id = Authentication_id
                auth.userAccountId = user.id
                auth.applicationId = applicationId
                auth.platformId = platform?.id;
                await getRepository(Authentication).save(auth); 
            }


            /*  Area to Save Service Repository  */
            //save into Firebase and get ID First
            /* TaskLog Detail
            - Timestamp
            - Service Connect
            - Which URI Used
            - Duration? 
            
            */
            //Save it into Repository
        }   
        return true;    
    }catch(error){
        return false;
    }

}