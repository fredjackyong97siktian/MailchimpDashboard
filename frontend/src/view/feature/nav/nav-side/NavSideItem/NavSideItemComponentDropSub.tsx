import React from 'react';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './../NavSideItem-style';
import Typography from '@material-ui/core/Typography';

interface openDropSub {
  open:boolean
}
export const NavSideItemComponentDropSub : React.FC<openDropSub>= ({open}) =>{
    const classes = useStyles();
    return(  
      <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={clsx(classes.ListItemButton,classes.nested)}>
              <ListItemText className={classes.ListItemText} >
                <Typography variant="subtitle2">
                    Starred
                </Typography>
              </ListItemText> 
            </ListItem>
          </List>
      </Collapse>);
  }