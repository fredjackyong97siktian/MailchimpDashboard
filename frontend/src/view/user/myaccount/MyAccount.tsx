import React, { ReactDOM, useState , useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './MyAccount-style'
import CssBaseline from '@material-ui/core/CssBaseline';
import PlatformNavTop from '../../platform/PlatformNavTop';
import { useSelector } from 'react-redux';
import {RootState} from '../../../reducer';
import {ELS} from './../../modal';
import {AccountNav} from '../../feature/nav/nav-inner/NavInner'
import MyAccountForm from './../../../utility/form/platform/myaccount/MyAccountForm';
const PlatformAdd : React.FC = () => {
  const status = useSelector((state:RootState)=>state.loading);
   const classes = useStyles();

   const tabcomponent=[
     {  
      label: "Profile",
      component: <MyAccountForm /> 
    },
    {  
      label: "Change Password",
      component: <CssBaseline />
    },
    {  
      label: "Platform Setting",
      component: <CssBaseline />
    },
    {  
      label: "Data Management",
      component: <CssBaseline />
    },
    {  
      label: "Billing and Usage",
      component: <CssBaseline />
    },
    {  
      label: "Advanced",
      component: <CssBaseline />
    }
   ]
   return(
    <div className={classes.root}>
        <ELS />
        <CssBaseline />
        <Grid container className={classes.background}>
          <Grid item xs={12} >    
          <PlatformNavTop />   
            <Container maxWidth="xl" className={classes.platformContainer}>
              <AccountNav tabcomponent={tabcomponent} orientation="vertical"/>
            </Container>
          </Grid>
        </Grid>
    </div>    
   ); 
}

export default PlatformAdd