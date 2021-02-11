'use strict';
var cryptovar = require('crypto');

var genRandomString = (length : number) => {
    return cryptovar.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

var sha512 = (password : string, salt : string) => {
    var hash = cryptovar.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        hash:value
    };
};

export const saltHashPassword = (userpassword : string) => {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);

    return passwordData;
}

export const saltHashPasswordSalt = (userpassword: string , salt : string)=> {
    var passwordData = sha512(userpassword,salt);

    return passwordData;
}