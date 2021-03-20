import React, { ReactDOM, useEffect } from 'react';
import useStyles from './ForgetPassword-style'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ForgetPasswordRecoverForm from '../../../utility/form/auth/forgetpassword/ForgetPasswordForm'
import {ELS} from './../../modal';


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
                Recover Password
            </Typography>
            <br/>
            <Typography component="h6" variant="subtitle2" align="center">
                Key in your new password.
            </Typography>
            <ForgetPasswordRecoverForm />
        </div>
        </Container>
      </>
    );
}

export default ForgetPassword;