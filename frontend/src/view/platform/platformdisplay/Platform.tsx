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
import PlatformNavTop from './../PlatformNavTop';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import LoadingPage from './../../../view/modal/Loadingpage/LoadingPage';
import Errorpage from './../../modal/Errorpage/Errorpage';
import {RootState} from './../../../reducer';

const Platform : React.FC = () => {
  const status = useSelector((state:RootState)=>state.loading);
   const platformOnclick = () => {
    window.location.replace(String( ));
   }
   const classes = useStyles();
//
   return(
    <div className={classes.root}>
      {status.loading ? <LoadingPage /> : <></>}
      {status.hasError ? <Errorpage message={status.message} explaination={status.explaination}/> : <> </>}

        <CssBaseline />
        <Grid container className={classes.background}>
          <Grid item xs={12} >    
          <PlatformNavTop />   
            <Container maxWidth="md" className={classes.platformContainer}>
                <Typography className={clsx(classes.platformTitle,classes.textWhite)}>
                    Your's Platform
                </Typography>
                <Grid container direction="row"  alignItems="flex-start" spacing={3} className={classes.platformGrid} >
                    <Grid item xs={12} sm={6} md={4}>
                      <Button variant="contained"  className={classes.paper}> 
                      <Grid container direction="column" justify="space-between" alignItems="center" className={classes.platformAddPlatform}>
                          <AddIcon />
                          <Typography className={classes.platformAddPlatform} variant="body2" gutterBottom>
                            Add Platform
                          </Typography> 
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Button variant="contained"  className={classes.paper}> 
                      <Grid container  direction="column" justify="flex-start" alignItems="flex-start" className={classes.platformPlatformDetail}>
                          <Typography align="left" noWrap={false} className={clsx(classes.platformButtonWidth,
                                                                                  classes.platformPlatformDetailTitle,
                                                                                  classes.platformPlatformDetailWord,
                                                                                  classes.textBlack
                                                                                  )}  >
                            bsupkithahwieks
                          </Typography> 
                          <Typography align="left" className={clsx(classes.platformButtonWidth,classes.platformPlatformDetailDesc,classes.platformPlatformDetailWord)} variant="body2" >
                           bsupkithahwieksi  
                          </Typography> 
                        </Grid>
                      </Button>
                    </Grid>
                </Grid>
                <Divider />
                <Typography className={clsx(classes.platformTitle,classes.textBlack)}>
                    Your Access
                </Typography>
                <Grid container direction="row"  alignItems="flex-start" spacing={3} className={clsx(classes.platformGrid,classes.textWhite)}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                      <Button variant="contained"  className={classes.paper}> xs </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
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