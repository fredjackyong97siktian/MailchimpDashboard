import React, { ReactDOM ,useEffect, useState ,useContext} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import useStyles from '../feature/nav/nav-top/NavTop-style'; 
import {NavTopI} from '../../model/nav/Nav'
import LinearProgress from '@material-ui/core/LinearProgress';
import {AuthContext} from '../../context/AuthContext';
import {FetchContext} from '../../context/FetchContext';
import IconButton from '@material-ui/core/IconButton';
import NavTopRight from '../user/nav/NavTopAccountContextMenu';
import Logo from '../logo/Logo';
//<LinearProgress />
const NavTop : React.FC = () => {

    const {authState} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);

    //ContextMenu
    const classes = useStyles();
   return(
     <>
    <AppBar position="static" elevation={0} className={clsx(classes.appBar)}>
    <Toolbar className={classes.toolbar}>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.platformtitle}>
            <Logo />
      </Typography>
      <NavTopRight />
    </Toolbar>
    
  </AppBar>   
  
  </>
   ); 
}

export default NavTop