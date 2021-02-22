import express from "express";
import passport from "passport";
import strategy from "passport-facebook";
import {setToken} from '../../setToken';
import {getRepository} from 'typeorm';
import { UserAccount } from "../../../../entity/user_account";
var config = require('./../../../../../config');

export const FBOauth = (data :any , router: any) => {
 // const router = express.Router();

  const FacebookStrategy = strategy.Strategy;
  passport.use(
    new FacebookStrategy(
      {
        clientID: config.FB_CLIENT_ID,
        clientSecret: config.FB_CLIENT_SECRET,
        callbackURL: config.FB_CLIENT_CALLBACK,
        profileFields: ['id', 'emails', 'name', 'photos',]
      },
      async function(accessToken, refreshToken, profile, done) {
  
       const { email, first_name, last_name } = profile._json;
       const userData = {
          fb_id : profile.id,
          accesstoken : accessToken,
          firstName : first_name,
          lastName : last_name,
          email : email,
          isactive: true
        };
        const userRepository = getRepository(UserAccount)
        const user = userRepository.create(userData);
        userRepository.save(user);
        const userDetail = await userRepository.findOne({email: email});
        return done(null,userDetail);
      }
    )
  );
  
  router.get("/facebook", passport.authenticate("facebook",{
      scope:['email']}));
  
  router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
     // session: false,
     // successRedirect: "/bsupkit-45126/us-central1/app/api/oauth/signup/success",
      failureRedirect: "/bsupkit-45126/us-central1/app/api/oauth/signup/fail"
    }), async (req :any,res :any ,next :any)=>{
      const userData = req.user
      const JWT = setToken(userData, res);
      const passwordsMatch = true;
     /* res.status(201).json({
        success: true,
        passwordsMatch,
        JWT
      })*/
      res.redirect('http://localhost:3000/feature')


     /* data = {
        success:true,
        passwordsMatch,
        JWT
      }*/

    }


  );
}
