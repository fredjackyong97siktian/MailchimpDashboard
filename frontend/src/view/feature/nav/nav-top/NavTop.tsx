import React, { ReactDOM ,useEffect, useState ,useContext} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import useStyles from './NavTop-style'; 
import {NavTopI} from './../../../../model/nav/Nav'
import NavTopPlatform from './NavTopPlatform';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import {AuthContext} from './../../../../context/AuthContext';
import {FetchContext} from './../../../../context/FetchContext';
import IconButton from '@material-ui/core/IconButton';
import NavTopRight from '../../../user/nav/NavTopAccountContextMenu';
//<LinearProgress />

const NavTop : React.FC<NavTopI> = ({nav,type}) => {
    let platform;
    type === 'Platform' ? platform = true : platform = false; 
    const {open,setOpen} = nav;
    const {authState} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);

    //ContextMenu
    const classes = useStyles();
    //Need to use useContext/Redux
    const handleDrawerOpen = () => {
        setOpen(true);
      };
      const handleDrawerClose = () => {
        setOpen(false);
      };     

   return(
     <>
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift , classes.backgroundColor)}>
    <Toolbar className={classes.toolbar}>
        <IconButton edge="start"  color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} >
          <MenuIcon />
        </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        <NavTopPlatform />
      </Typography>
      <NavTopRight />
    </Toolbar>
  </AppBar>   
  
  </>
   ); 
}

export default NavTop