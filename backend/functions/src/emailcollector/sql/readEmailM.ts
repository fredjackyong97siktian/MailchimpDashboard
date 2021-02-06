import {pgdb} from '../../index';

//how to put the interface in this function??
export const readEmailM  = (body: string) => {
   return pgdb.any("SELECT email from user_account where email = ${email}",
   body);

}