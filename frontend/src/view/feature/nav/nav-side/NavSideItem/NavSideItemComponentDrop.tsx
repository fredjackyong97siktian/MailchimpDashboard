import React,{useContext} from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './../NavSideItem-style';
import {NavOpenContext} from './../NavSide';
import Divider from '@material-ui/core/Divider';
import { DrawerSettingComponent } from '../../../../../model/nav/Nav';
import {NavSideItemComponentDropSub} from './NavSideItemComponentDropSub';

export const NavSideItemComponentDrop : React.FC<DrawerSettingComponent> = ({item}) =>{
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  //openNav Context is to detect if the user close the nav, other thing will close too.
  const openNav = useContext(NavOpenContext);

  console.log(item)
    const classes = useStyles();
    return(  
      <> 
      <ListItem button className={classes.ListItemButton} onClick={handleClick}>
        <ListItemIcon className={classes.ListItemIcon }>
          {item.icon}
        </ListItemIcon>
        <ListItemText className={classes.ListItemText} primary={item.tag} />
            {open ? <ExpandLess className={classes.ListItemIcon }/> : <ExpandMore className={classes.ListItemIcon }/>}
      </ListItem>
      {openNav? <Divider className={classes.divider}/> : <></>}
      
      {openNav? <NavSideItemComponentDropSub open={open}/> : <></> }
      </>);
  }