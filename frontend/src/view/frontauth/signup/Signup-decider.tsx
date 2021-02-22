import React, { useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './Signup-style';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SignupForm from '../../../utility/form/auth/signup/SignupForm'
import { useSelector } from 'react-redux';
import {RootState} from '../../../reducer';
import LoadingPage from '../../modal/Loadingpage/LoadingPage';
import Errorpage from '../../modal/Errorpage/Errorpage';
import Successpage from '../../modal/Successpage/Successpage';
import {success} from './Signup-message';
import {useParams} from 'react-router-dom';

interface status {
  status:string
}

export default function SignUpDecider() {
  const {status} = useParams<status>();
  const classes = useStyles();
  
  return (
    <>
    <Container component="main" maxWidth="xs">

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            {status === 'success' ? 'Email Address Verified' : "Invalid Address"}
        </Typography>
        <Typography variant="h6">
            {status === 'success' ? 'Please login to access your access.' : ""}
        </Typography>
        <Grid container justify="center">
            <Grid item>
            <Link href="/auth/login" variant="body2">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
              Back to Login
            </Button>
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
    </>
  );
}