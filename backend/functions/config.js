require('dotenv').config();

module.exports = {
    POSTGRESQL_TYPE: process.env.POSTGRESQL_TYPE,
    POSTGRESQL_HOST : process.env.POSTGRESQL_HOST,
    POSTGRESQL_PORT : process.env.POSTGRESQL_PORT,
    POSTGRESQL_USER : process.env.POSTGRESQL_USER,
    POSTGRESQL_PASSWORD: process.env.POSTGRESQL_PASSWORD,
    POSTGRESQL_DATABASE: process.env.POSTGRESQL_DATABASE,

    JWTSK:process.env.JWTSK,
    
    EMAIL_SENDER_HOST:process.env.EMAIL_SENDER_HOST,
    EMAIL_SENDER_PORT:process.env.EMAIL_SENDER_PORT,
    EMAIL_SENDER_AUTH_USER:process.env.EMAIL_SENDER_AUTH_USER,
    EMAIL_SENDER_AUTH_PASS:process.env.EMAIL_SENDER_AUTH_PASS,

    FB_CLIENT_ID : process.env.FB_CLIENT_ID,
    FB_CLIENT_SECRET: process.env.FB_CLIENT_SECRET,
    FB_CLIENT_CALLBACK: process.env.FB_CLIENT_CALLBACK,

    BACKEND_API:process.env.BACKEND_API,
    CLIENT_API:process.env.CLIENT_API,


}