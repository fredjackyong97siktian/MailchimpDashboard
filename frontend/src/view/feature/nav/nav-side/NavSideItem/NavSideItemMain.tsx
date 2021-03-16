import React , {useContext} from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import StarIcon from '@material-ui/icons/Star';
import CategoryIcon from '@material-ui/icons/Category';
import useStyles from './../NavSideItem-style';
import {NavSideItemComponentDrop} from './NavSideItemComponentDrop';
import Divider from '@material-ui/core/Divider';
import {NavOpenContext} from './../NavSide';

const NavSideItemMain : React.FC = () =>{
  const classes = useStyles();
  const background = {background:'#605865'}   
  const openNav = useContext(NavOpenContext);
  const ListItemArray = [
/*    {
      tag : "Favourite",
      icon : <StarIcon /> 
    },
    {
      tag : "Dashboard",
      icon : <DashboardIcon />      
    },*/
    {
      tag : "Category",
      icon :  <CategoryIcon />   
    }
  ]

const NavBar = ListItemArray.map((item)=>{
  return (   
    <>  
    <NavSideItemComponentDrop item={item}/>
    </>
  );
})

  return(  
  <div>    
    {openNav?<Divider style={background}/>:<></>}
    {NavBar}
  </div>);
}

export default NavSideItemMain