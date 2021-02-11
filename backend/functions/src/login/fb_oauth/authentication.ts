import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";

import userModel from "../user/user.model";
var config = require('./../config');
const FacebookStrategy = strategy.Strategy;


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
      callbackURL: 'http://localhost:3000/api/oauth/signup/facebook',
    },
    function(accessToken, refreshToken, profile, done) {
     /* const { email, first_name, last_name } = profile._json;
      const userData = {
        email,
        firstName: first_name,
        lastName: last_name
      };*/
     //new userModel(userData).save();
      done(null, profile);
    }
  )
);