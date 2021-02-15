import {pgdb} from '../../index';

//how to put the interface in this function??
export const readEmailS  = (body: string) => {
   return pgdb.any("SELECT email from user_account where email = ${email}",
   body);

}

export const readEmailVerificationS = (body : string)=> {
   return pgdb.any("SELECT email_verification_code from user_account where email = ${email}",
   body);
}

export const readEmailCodeS = (body: string)=> {
   return pgdb.any("SELECT email from user_account where email_verification_code = ${verificationid}",
   {verificationid:body});
}