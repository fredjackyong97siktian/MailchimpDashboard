import express from "express";
import passport from "passport";
import userController from "./controller";
var config = require('./../../../../config');

userController();
const router = express.Router();

router.get("/facebook", passport.authenticate("facebook",{
    scope:['email']}));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/feature",
    failureRedirect: "/bsupkit-45126/us-central1/app/api/oauth/signup/fail"
  })
);
/*
router.get("/fail", (req, res) => {
  
  res.writeHead(301,
    {Location: config.CLIENT_API+'auth/signup/fail'}
  );
});

router.get("/", (req, res) => {
  res.writeHead(301,
    {Location: config.CLIENT_API+'feature'}
  );
  res.status(201).json({
    success: config.CLIENT_API+'feature'
  })
});*/
export default router;