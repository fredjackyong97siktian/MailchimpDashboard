import * as jwt from 'jsonwebtoken';

const config = require('./../../config')

//iss and aud need to put according to situation. Need to study more on this.
export const createJWTToken = (payload : any) => {
    const secretKey = config.JWTSK;
    
    const detail = {
        sub: payload.user_id,
        email: payload.email,
        role: 'admin',
        iss: 'api.orbit',
        aud: 'api.orbit'
    }
    return jwt.sign(
        payload, 
        secretKey, 
      {algorithm: 'HS256',
        expiresIn : '5m'
    })
}
