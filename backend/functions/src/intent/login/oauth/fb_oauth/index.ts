import passport from "passport";
import strategy from "passport-facebook";
import {setToken} from '../../setToken';
import {getRepository} from 'typeorm';
import { UserAccount } from "../../../../entity/user_account";
import {OauthLogin} from "../../../../entity/oauth_login";

const { v4: uuidv4 } = require('uuid');
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
        profileFields: ['id', 'emails','displayName', 'name', 'photos',]
      },
      async function(accessToken, refreshToken, profile, done) {
  
       const { email, first_name, last_name  ,displayName} = profile._json;
       console.log('this is displayName')
       console.log(displayName)
       const userData = {
          profile_id : profile.id,
          accesstoken : accessToken,
          firstName : first_name,
          lastName : last_name,
          email : email,
          isactive: true
        };
        const userRepository = getRepository(UserAccount)
        const check = await userRepository.find({where:{email:email}})
        if(check.length < 1){
          const user = new UserAccount();
          user.email = userData.email;
          //For Temporary
          user.password = uuidv4();
          user.firstname = userData.firstName;
          user.lastname = userData.lastName;
          user.isactive = userData.isactive;
          await userRepository.save(user);         
        }          
        const userDetail = await userRepository.findOne({email: email});
        console.log('USERDETAIL')
        console.log(userDetail);
        //Not Yet Account Linking algorithms. Will implement once mature.
        const OauthLoginRepository = getRepository(OauthLogin);
        const oauthLogin = await OauthLoginRepository.find({where:{userAccountId:userDetail?.id,oauthId:1}})
        if(oauthLogin.length < 1 && userDetail) {
          await OauthLoginRepository
                .createQueryBuilder()
                .insert()
                .into(OauthLogin)
                .values([{
                  "userAccountId" : userDetail.id,
                  "oauthId" : 1,
                  "oauth_profile_id":  userData.profile_id,
                  "access_token" :  userData.accesstoken
                }])
                .execute();
          }

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
      res.redirect('http://localhost:3000/')
     // const passwordsMatch = true;
     /* res.status(201).json({
        success: true,
        passwordsMatch,
        JWT
      })*/

     /* data = {
        success:true,
        passwordsMatch,
        JWT
      }*/
    }
  );

  router.get(
    '/fail',(req :any, res :any)=>{
      res.status(409).json({
        success:false
      })
    }
  )
}
