import React , {useContext,useState} from 'react';
import { ListHandleI } from '../../../../../model/nav/Nav';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StarIcon from '@material-ui/icons/Star';
import AppsIcon from '@material-ui/icons/Apps';
import useStyles from './../NavSideItem-style';
import {NavSideItemComponentDrop} from './NavSideItemComponentDrop';
import Divider from '@material-ui/core/Divider';
import {NavOpenContext} from './../NavSide';

const NavSideItemMain : React.FC = () =>{
  const classes = useStyles();
  const [listHandle,setListHandle] = useState<ListHandleI>({
    'favourite': false,
    'dashboard': false,
    'application': false
  })

  const onSetLIstHandle = (list:string) => {
    setListHandle({
      'favourite': false,
      'dashboard': false,
      'application': false
    })

    switch(list){
      case 'favourite' :
        setListHandle({
          'favourite' : true, ...listHandle
        })
        break;
      case 'dashboard':
        setListHandle({
          'dashboard' : true, ...listHandle
        })
        break;
      case 'application':
        setListHandle({
          'application' : true, ...listHandle
        })
        break;
    }
  }

  const background = {background:'#605865'}   
  const openNav = useContext(NavOpenContext);
  const ListItemArray = [
   {
      tag : "Favourite",
      list:'favourite',
      api: 'application',
      level:1,
      icon : <StarIcon /> 
    },
     {
      tag : "Dashboard",
      list: "dashboard",
      api: 'application',
      level:1,
      icon : <DashboardIcon />      
    },
    {
      tag : "Application",
      list: "application",
      api:'application',
      level:2,
      icon :  <AppsIcon />   
    }
  ]

const NavBar = ListItemArray.map((item)=>{
  return (   
    <>  
    <NavSideItemComponentDrop item={item} listHandle={listHandle} onSetListHandle={onSetLIstHandle}/>
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