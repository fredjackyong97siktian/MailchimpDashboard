import {createJWTToken} from "./../../jwt";
const jwtDecode = require('jwt-decode');

export const setToken = (user: any ,res : any) => {
    const userInfo = {
        user_id : user.user_account_id,
        email: user.email,
    }
    //use userInfo to create JWTToken
    const jwtToken = createJWTToken(userInfo);
    //const decodedToken = jwtDecode(jwtToken);
    //const expiresAt = decodedToken.exp;

    res.cookie('Token',jwtToken, {
        //expires: new Date(new Date().getTime() + 5 * 1000),
        httpOnly: true,
        //secure:true,
        //sameSite:true
    })

    const JWT = {
        jwtToken: true,
      //  userInfo: userInfo,
       // expiresAt: expiresAt,
    }

    return JWT;
}