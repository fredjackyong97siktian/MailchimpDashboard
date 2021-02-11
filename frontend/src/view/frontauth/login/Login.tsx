import React, { ReactDOM } from 'react';
import useStyles from './Login-style';
import Copyright from './Login-copyright'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LoginForm from './../../../utility/form/auth/LoginForm'

const Login : React.FC = () => {
    const classes = useStyles();
    return (
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
        <a href='/api/auth/signup/facebook'> <Button> Facebook </Button> </a>
        <Button> GOOGLE </Button>        
       </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
   
    </Container>

    );
}

export default Login;