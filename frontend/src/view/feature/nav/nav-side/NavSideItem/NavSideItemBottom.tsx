import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import useStyles from './../NavSideItem-style';
import SettingsIcon from '@material-ui/icons/Settings';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HelpIcon from '@material-ui/icons/Help';

const NavSideItemBottom : React.FC = () =>{
    const classes = useStyles();
    const ListItemArray = [
      {
        tag : "Setting",
        icon : <SettingsIcon /> 
      },
      {
        tag : "Billing",
        icon : <CreditCardIcon />      
      },
      {
        tag : "Contact Us",
        icon :  <HelpIcon />   
      }
    ]

    const NavBar = ListItemArray.map((item)=>{
      return (   
        <>  
        <ListItem button className={classes.ListItemButton}>
          <ListItemIcon className={classes.ListItemIcon}>
            {item.icon}
          </ListItemIcon>
          <ListItemText className={classes.ListItemText} primary={item.tag} />
        </ListItem>
        </>
      );
    })

    return(
      <div>
        {NavBar}
      </div> 
    );
}

export default NavSideItemBottom