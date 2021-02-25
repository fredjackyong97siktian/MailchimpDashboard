import React, { ReactDOM , useState  } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import SearchBarCustom from "./../../../../utility/search-bar/SearchBarCustom";
import useStyles from './NavSide-style'; 
import  NavSideItemBottom  from './NavSideItem/NavSideItemBottom';
import   NavSideItemMain  from './NavSideItem/NavSideItemMain';
import {DrawerSetting} from './../../../../model/nav/Nav'
import Logo from './/../../../logo/Logo';
export const NavOpenContext = React.createContext({} as boolean);

const NavSide : React.FC<DrawerSetting> = ({open, setOpen}) => {
    const classes = useStyles();
    const color = {color:'white'}
    const background = {background:'#605865'}    
    //Need to use useContext/Redux
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

   return(
    <>
      <NavOpenContext.Provider value={open}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      > 

        <div className={classes.toolbarIcon}>
        <span className={classes.toolbarLogo}>
         <Logo />
         </span>
         <span>
          <IconButton style={color} onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          </span>
        </div>
        {open ? <SearchBarCustom /> : <> </> }
        <List>
          <NavSideItemMain/>
        </List>
        <span className={classes.navbottom}>
        <Divider style={background}/>
          <List>
            <NavSideItemBottom/>
          </List>
        </span>
      </Drawer>
      </NavOpenContext.Provider>
    </>    
   ); 
}

export default NavSide