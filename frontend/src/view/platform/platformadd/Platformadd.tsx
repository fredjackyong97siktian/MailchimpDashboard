import React, { ReactDOM, useState , useContext } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './Platformadd-style'
import CssBaseline from '@material-ui/core/CssBaseline';
import { SetStateAction } from 'react';
import Typography from '@material-ui/core/Typography';
import PlatformNavTop from '../PlatformNavTop';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PlatformForm from './../../../utility/form/auth/platform/PlatformForm';

const PlatformAdd : React.FC = () => {
   const platformOnclick = () => {
    window.location.replace(String( ));
   }
   const classes = useStyles();
//
   return(
    <div className={classes.root}>
        <CssBaseline />
        <Grid container className={classes.background}>
          <Grid item xs={12} >    
          <PlatformNavTop />   
            <Container maxWidth="sm" className={classes.platformContainer}>
              <PlatformForm />
            </Container>
          </Grid>
        </Grid>
    </div>    
   ); 
}

export default PlatformAdd