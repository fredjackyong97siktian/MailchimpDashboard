import React, { ReactDOM, useEffect } from 'react';
import useStyles from './Login-style';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LoginForm from '../../../utility/form/auth/login/LoginForm'
import { useSelector } from 'react-redux';
import {RootState} from './../../../reducer';
import LoadingPage from './../../../view/modal/Loadingpage/LoadingPage';
import Errorpage from './../../modal/Errorpage/Errorpage';
import { useHistory } from "react-router-dom";
import config from './../../../config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from '@fortawesome/fontawesome-svg-core';
import './../../../utility/icon/IconLibrary'
import Box from '@material-ui/core/Box';
import {ELS} from './../../modal';
import Divider from '@material-ui/core/Divider';
const Login : React.FC = () => {
    const status = useSelector((state:RootState)=>state.loading);
    const classes = useStyles();
    const history = useHistory();
    console.log(config.FACEBOOK_API);
    const handleClick = (type : string) => {
      switch(type){
        case 'Facebook':
          window.location.replace(String(config.FACEBOOK_API));
          break;
        case 'Google':
          break;
      }

    }

    //Oauth Button Option
    const oauthButton = [
      {
        tag: "Facebook",
        actionTag:"Facebook",
        svg: 'facebook-f',
        colorButton: "#3B5998"
      },
      { 
        tag: "Google",
        actionTag:"Google",
        svg:'google',
        colorButton: "#EA4335"
      },
      {
        tag: "Linkedin",
        actionTag:"Linkedin",
        svg: 'linkedin-in',
        colorButton: "#0077B5"
      }
    ]

    const oauthButtonList = oauthButton.map((item)=>{
      return(
      <>
      <Box mt={2}>
        <Button variant="contained" onClick= {() => handleClick(item.actionTag)} className={classes.oauthButton} style={item.tag==='Facebook'? {backgroundColor: item.colorButton} : {backgroundColor: 'grey'}} disabled={item.tag==='Facebook' ? false : true}>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            className={classes.oauthButtonGrid}
          >
            <span className={classes.oauthButtonIconGrid}> <FontAwesomeIcon icon={['fab',item.svg as IconName]} className={classes.oauthButtonIcon} size="2x" /> </span>
            <Typography variant="button" display="block" className={classes.oauthButtonText} gutterBottom>  Sign in with {item.tag}  </Typography>
            </Grid>
        </Button>
      </Box>
      </>
      )
    })
    return (
      <>
      <ELS />

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
          <LoginForm />
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
              
            </Link>
          </Grid>
          <Grid item>
            <Link href="/auth/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className={classes.lowerORpaper}>
       <Typography>
            OR 
       </Typography>
      </div>
      <div className={classes.lowerpaper}>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          spacing={0}
          className="altauth"
        >
          {oauthButtonList}
       </Grid>
      </div>   
    </Container>
      </>
    );
}

export default Login;