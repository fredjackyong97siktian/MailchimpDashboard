import passport from "passport";
import express from "express";
import {FBOauth} from './fb_oauth'

const router = express.Router();
let data = {}

FBOauth(data,router);

passport.serializeUser(function(userData, done) {
    done(null, userData);
  });
  
passport.deserializeUser(function(userData :any, done) {
    done(null, userData);
  });

router.get('/success', (req,res)=>{
    res.status(409).json({
        status:'fail',
        data
    })
})

export default router;

