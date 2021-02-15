import {pgdb} from './../../index';
import {SignUpModal} from './../modal';

//how to put the interface in this function??
export const createAccount  = (body: SignUpModal) => {
    return pgdb.any(
        "INSERT INTO user_account(user_account_id,email,email_verification_code, email_verification_code_sent_at, password,firstname,lastname) VALUES (random_userID(8),${email},gen_random_uuid(),now_utc() ,crypt(${password},gen_salt('bf')),${firstname},${lastname})", 
            body);
}