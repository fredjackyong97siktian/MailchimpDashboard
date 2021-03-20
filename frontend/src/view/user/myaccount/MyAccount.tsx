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
import MyAccountForm from '../../../utility/form/platform/myaccount/Profile/MyAccountForm';
import ChangepasswordForm from '../../../utility/form/platform/myaccount/Changepassword/Changepassword';
const PlatformAdd : React.FC = () => {
  const status = useSelector((state:RootState)=>state.loading);
   const classes = useStyles();

   const tabcomponent=[
     { 
      path: '/profile',
      name: 'profile',  
      label: "Profile",
      component: <MyAccountForm />,
      exact:false 
    },
    {  
      path: '/password',
      name: 'password',
      label: "Change Password",
      component: <ChangepasswordForm />,
      exact:false
    },
    {  
      path: '/platform',
      name: 'platform',
      label: "Platform Setting",
      component: <CssBaseline />,
      exact:false
    },
    {  
      path: '/data',
      name: 'data',
      label: "Data Management",
      component: <CssBaseline />,
      exact:false
    },
    {  
      path: '/bill',
      name: 'bill',
      label: "Billing and Usage",
      component: <CssBaseline />,
      exact:false
    },
    {  
      path: '/advanced',
      name: 'advanced',
      label: "Advanced",
      component: <CssBaseline />,
      exact:false
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