import React, { ReactDOM ,useEffect, useState ,useContext} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './NavTop-style'; 
import {DrawerSetting} from './../../../../model/nav/Nav'
import LinearProgress from '@material-ui/core/LinearProgress';
import {AuthContext} from './../../../../context/AuthContext';
import {FetchContext} from './../../../../context/FetchContext';

const NavTop : React.FC<DrawerSetting> = ({open,setOpen}) => {
    const {authState} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);
    console.log(authState);
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
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar className={classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        {authState.userInfo.email}'s Dashboard
      </Typography>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Toolbar>
    <LinearProgress />
  </AppBar>   
  
  </>
   ); 
}

export default NavTop