//configuration
var config = require('./../../config');

//JWT Token
const jwt = require('express-jwt');

//in the future,can produce more JWT to check on more specify role
export const checkJWT = jwt({
  secret: config.JWTSK,
  algorithms: ['HS256'],
  iss : 'api.orbit',
  aud: 'api.orbit',
  getToken: (req :any) => req.cookies.Token
})