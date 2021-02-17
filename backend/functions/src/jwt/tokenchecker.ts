//configuration
var config = require('./../../config');

//JWT Token
const jwt = require('express-jwt');

export const checkJWT = jwt({
  secret: config.JWTSK,
  iss : 'api.orbit',
  aud: 'api.orbit'
})