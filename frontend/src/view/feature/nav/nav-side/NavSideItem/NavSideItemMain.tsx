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

  const onSetLIstHandle = (list:string , open:boolean) => {
    setListHandle({
      'favourite': false,
      'dashboard': false,
      'application': false
    })

    switch(list){
     /* case 'favourite' :
        setListHandle((prevState :any )=>({
          ...prevState,
          'favourite' : open
        }))
        break;
      case 'dashboard' :
        setListHandle((prevState :any )=>({
          ...prevState,
          'dashboard' : open
        }))
        break;*/
      case 'application' :
        setListHandle((prevState :any )=>({
          ...prevState,
          'application' : open
        }))
        break; 
      default:
        setListHandle((prevState :any )=>({
          'favourite': false,
          'dashboard': false,
          'application': false
        }))
        break;

    }
  }

  const background = {background:'#605865'}   
  const openNav = useContext(NavOpenContext);
  const ListItemArray = [
   /*{
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
    },*/
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

export default React.memo(NavSideItemMain)