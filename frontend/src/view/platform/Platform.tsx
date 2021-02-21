import React, { ReactDOM, useState , useContext } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './Platform-style'
import CssBaseline from '@material-ui/core/CssBaseline';
import { SetStateAction } from 'react';
import Typography from '@material-ui/core/Typography';
import PlatformNavTop from './PlatformNavTop';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

const Platform : React.FC = () => {
    const [open,setOpen] = useState(false);
   const classes = useStyles();
//
   return(
    <div className={classes.root}>
        <CssBaseline />

        <Grid container className={classes.background}>
          <Grid item xs={12} >    
          <PlatformNavTop />   
            <Container maxWidth="md" >
                <Typography>
                    Own
                </Typography>
                <Grid container direction="row"  alignItems="flex-start" spacing={3} className={classes.platformGrid}>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                </Grid>
                <Divider />
                <Typography>
                    Own
                </Typography>
                <Grid container direction="row"  alignItems="flex-start" spacing={3} className={classes.platformGrid}>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                </Grid>
            </Container>
          </Grid>
        </Grid>
    </div>    
   ); 
}

export default Platform