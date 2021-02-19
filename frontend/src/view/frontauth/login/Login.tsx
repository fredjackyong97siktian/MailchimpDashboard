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
import LoginForm from './../../../utility/form/auth/LoginForm'
import { useSelector } from 'react-redux';
import {RootState} from './../../../reducer';
import LoadingPage from './../../../view/modal/Loadingpage/LoadingPage';
import Errorpage from './../../modal/Errorpage/Errorpage';
import { useHistory } from "react-router-dom";
import config from './../../../config';

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

    useEffect(()=>{
      //status.hasSuccess && history.push('/feature');
      if(status.hasSuccess){
        window.location.replace(String(config.API_CLIENT+'/feature'));
      }
    },[status.hasSuccess])

    return (
      <>
     {status.loading ? <LoadingPage /> : <></>}
     {status.hasError ? <Errorpage message={status.message} explaination={status.explaination}/> : <> </>}

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
      <div className={classes.paper}>
       <Typography>
       OR Sign in Using
       </Typography>
      </div>
      <div className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={0}
          className="altauth"
        >
        <Button onClick= {() => handleClick('Facebook')}> Facebook </Button>
        <Button onClick= {() => handleClick('Google')}> GOOGLE </Button>        
       </Grid>
      </div>   
    </Container>
      </>
    );
}

export default Login;