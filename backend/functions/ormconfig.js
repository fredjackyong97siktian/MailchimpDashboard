//configuration
var config = require('./config');

module.exports = {
    "type": config.POSTGRESQL_TYPE,
    "host": config.POSTGRESQL_HOST,
    "port": config.POSTGRESQL_PORT,
    "username": config.POSTGRESQL_USER,
    "password": config.POSTGRESQL_PASSWORD,
    "database": config.POSTGRESQL_DATABASE,
    "entities": ['lib/entity/*.js'],
    "autoLoadEntities": true,
    "synchronize": false
}