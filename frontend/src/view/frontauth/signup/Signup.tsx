import React, { useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './Signup-style';
import Container from '@material-ui/core/Container';
import SignupForm from '../../../utility/form/auth/signup/SignupForm'
import { useSelector } from 'react-redux';
import {RootState} from './../../../reducer';
import LoadingPage from './../../../view/modal/Loadingpage/LoadingPage';
import Errorpage from './../../modal/Errorpage/Errorpage';
import Successpage from './../../modal/Successpage/Successpage';
import {success} from './Signup-message';

export default function SignUp() {
  const status = useSelector((state:RootState)=>state.loading);
  const classes = useStyles();

  return (
    <>
     {status.loading ? <LoadingPage /> : <></>}
     {status.hasError ? <Errorpage message={status.message} explaination={status.explaination} /> : <> </>}
     {status.hasSuccess ? <Successpage success={success} /> : <> </> }
    <Container component="main" maxWidth="xs">

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignupForm/>
        <Grid container justify="flex-end">
            <Grid item>
              <Link href="/auth/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
    </>
  );
}