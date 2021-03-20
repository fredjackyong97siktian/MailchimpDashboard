import React, { ReactDOM, useEffect } from 'react';
import useStyles from './ForgetPassword-style'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ForgetPasswordForm from '../../../utility/form/auth/forgetpassword/ForgetPasswordForm'
import config from './../../../config';
import Box from '@material-ui/core/Box';
import {ELS} from './../../modal';
import { FaFacebookSquare ,FaLinkedin,FaGoogle } from 'react-icons/fa';

const ForgetPassword : React.FC = () => {
    const classes = useStyles();

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
            Forget your password?
            </Typography>
            <br/>
            <Typography component="h6" variant="subtitle2" align="center">
            Don't worry! Just fill in your registered email and we'll send you a link to reset your password.
            </Typography>
            <ForgetPasswordForm />
        </div>
        </Container>
      </>
    );
}

export default ForgetPassword;