require('dotenv').config();

module.exports = {
    POSTGRESQL_HOST : process.env.POSTGRESQL_HOST,
    POSTGRESQL_PORT : process.env.POSTGRESQL_PORT,
    POSTGRESQL_USER : process.env.POSTGRESQL_USER,
    POSTGRESQL_PASSWORD: process.env.POSTGRESQL_PASSWORD,
    POSTGRESQL_DATABASE: process.env.POSTGRESQL_DATABASE,
}