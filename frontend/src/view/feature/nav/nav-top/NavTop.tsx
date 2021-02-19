import React, { ReactDOM ,useEffect, useState ,useContext} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './NavTop-style'; 
import {DrawerSetting} from './../../../../model/nav/Nav'
import LinearProgress from '@material-ui/core/LinearProgress';
import {AuthContext} from './../../../../context/AuthContext';
import {FetchContext} from './../../../../context/FetchContext';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavTop : React.FC<DrawerSetting> = ({open,setOpen}) => {
    const {authState} = useContext(AuthContext);
    const {authAxios} = useContext(FetchContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
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
        's Dashboard
      </Typography>
      <IconButton color="inherit">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <AccountCircleIcon style={{fill: "green", fontSize:'35px'}}/>
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </IconButton>
    </Toolbar>
    <LinearProgress />
  </AppBar>   
  
  </>
   ); 
}

export default NavTop