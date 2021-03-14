import React, { ReactDOM, useState , useContext , useEffect } from 'react';
import {RPlatformS} from './redux/FeatureAction';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import {RootState} from './../../../reducer';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import {AuthContext} from '../../../context/AuthContext';
import {FetchContext} from '../../../context/FetchContext';
import {useDispatch  } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavSide from '../nav/nav-side/NavSide'
import NavTop from '../nav/nav-top/NavTop'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useStyles from './Feature-style'
import CssBaseline from '@material-ui/core/CssBaseline';
import { SetStateAction } from 'react';
import {FeatureRoute} from './FeatureRoute';
import Dashboard from './../dashboard/Dashboard';
import {windowpopOpen} from './../../../windowpop/windowpop';
import config from '../../../config';
import {
  Link,
  Redirect,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'

interface Params {
  platformid: string
}
interface variantI{
  variant: "permanent" | "temporary" | undefined
}
const Feature : React.FC = () => {
  const [width,setWidth] = useState(false);
  const [open,setOpen] = useState(true);
  const [nav,setNav] = useState<variantI>({variant:undefined});
  const dispatch = useDispatch();
  const {authData} = useContext(AuthContext);
  const {authAxios} = useContext(FetchContext);
   const {platformid}  = useParams<Params>();

   const classes = useStyles();
  //redux value 
  const PlatformDetail = useSelector((state:RootState)=>state.feature);
   useEffect(()=>{
      const PlatformFetch = () => {
        dispatch(RPlatformS(authAxios,platformid))
      }
      PlatformFetch();
   },[])

   useEffect(()=>{

    if(window.innerWidth <= 760){
      setNav({variant:"temporary"});
      setOpen(false);
    } else{
      setNav({variant:"permanent"})
    }
 },[window.innerWidth])  
 const CLIENT_ID = config.ZOHO.CLIENT_ID
 const REDIRECT_URL = config.ZOHO.REDIRECT_URL
   return(
    <div className={classes.root}>
      <React.Fragment key='left'>
      <NavTop nav={{open : open,setOpen:setOpen}} type={'Feature'}/>
      <NavSide variant={nav.variant} setOpen={setOpen} open={open}/>
      </React.Fragment>
      <Button onClick={()=>windowpopOpen(`https://accounts.zoho.com/oauth/v2/auth?scope=ZOHOPEOPLE.dashboard.ALL&client_id=${CLIENT_ID}&response_type=code&access_type=offline&redirect_uri=${REDIRECT_URL}&prompt=consent​`)}> Click Me</Button>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Dashboard />
        </Container>
      </main>
    </div>    
   ); 
}

export default Feature