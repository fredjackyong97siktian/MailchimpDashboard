import {pgdb} from '../../index';

//how to put the interface in this function??
export const updateEmailVerification  = (body: string) => {
   return pgdb.any("UPDATE user_account SET isactive = true where email_verification_code =  ${verification_id}",
   {verification_id:body});

}