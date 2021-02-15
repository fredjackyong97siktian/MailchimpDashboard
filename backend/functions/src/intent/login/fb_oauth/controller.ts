import passport from "passport";
import strategy from "passport-facebook";
import {getRepository} from 'typeorm';
import { user_account } from "./../../../entity/user_account";

//import userModel from "../user/user.model";
var config = require('./../../../../config');
const FacebookStrategy = strategy.Strategy;
console.log(config.FB_CLIENT_ID)
const controller = () => {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj :any, done) {
    done(null, obj);
  });
  
  passport.use(
    new FacebookStrategy(
      {
        clientID: config.FB_CLIENT_ID,
        clientSecret: config.FB_CLIENT_SECRET,
        callbackURL: config.FB_CLIENT_CALLBACK,
        profileFields: ['id', 'emails', 'name', 'photos',]
      },
      function(accessToken, refreshToken, profile, done) {

        const { email, first_name, last_name } = profile._json;
       const userData = {
          fb_id : profile.id,
          accesstoken : accessToken,
          firstName : first_name,
          lastName : last_name,
          email : email,
          isactive: true
        };
        const userRepository = getRepository(user_account)
        const user = userRepository.create(userData);
        userRepository.save(user);
        done(null, profile);
      }
    )
  );
  
}

export default controller