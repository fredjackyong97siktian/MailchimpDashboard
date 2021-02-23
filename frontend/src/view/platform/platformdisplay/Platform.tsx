import React, { ReactDOM, useState , useContext, useEffect } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './Platform-style'
import CssBaseline from '@material-ui/core/CssBaseline';
import { SetStateAction } from 'react';
import Typography from '@material-ui/core/Typography';
import PlatformNavTop from './../PlatformNavTop';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import LoadingPage from './../../../view/modal/Loadingpage/LoadingPage';
import Errorpage from './../../modal/Errorpage/Errorpage';
import {RootState} from './../../../reducer';
import {PlatformItemAccess} from './platformitem/PlatformItemAccess';
import {PlatformItemAdd} from './platformitem/PlatformItemAdd';
import {PlatformItemOwn} from './platformitem/PlatformItemOwn';
import {AuthContext} from './../../../context/AuthContext';
import {FetchContext} from './../../../context/FetchContext';
import config from './../../../config';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../view/modal/Loadingpage/redux/LoadingConstant'

const Platform : React.FC = () => {
  const [platformOwnDetail, setPlatformOwnDetail] = useState([])
  const dispatch = useDispatch();
  const status = useSelector((state:RootState)=>state.loading);
  const classes = useStyles();
  const {authData} = useContext(AuthContext);
  const {authAxios} = useContext(FetchContext);
  
  const handleClick = (platform_id : string) => {
    window.location.replace(String(config.API_CLIENT+'/platform/'+platform_id));
  }
  useEffect(()=>{
    dispatch({type:PAGE_STATUS_LOADING});
    const platform = async () => {
      try{
        console.log("CALLING STAGE")
        const {data} = await authAxios.post('platform/',{"email":authData.userInfo.email})
        setPlatformOwnDetail(data.platformDetail)
        dispatch({type:PAGE_STATUS_SUCCESS});
      }catch(err){
        dispatch({type:PAGE_STATUS_ERROR,payload:err});
        console.log(err);
      }
    } 
    platform();
  },[])
  //Own
  console.log('RETURN STAGE')
  const platformOwn = platformOwnDetail.map((item : any)=>{
    return(<PlatformItemOwn key={item.platform_id} platform_id={item.platform_id} platformname={item.platform_name} onClick={handleClick} />)
  })
  //Access

   return(
    <div className={classes.root}>
      {status.loading ? <LoadingPage /> : <></>}
      {status.hasError ? <Errorpage message={status.message} explaination={status.explaination}/> : <> </>}

        <CssBaseline />
        <Grid container className={classes.background}>
          <Grid item xs={12} >    
          <PlatformNavTop />   
            <Container maxWidth="md" className={classes.platformContainer}>
                <Typography className={clsx(classes.platformTitle,classes.textWhite)}>
                    Your's Platform
                </Typography>
                <Grid container direction="row"  alignItems="flex-start" spacing={3} className={classes.platformGrid} >
                    <PlatformItemAdd/>
                    {platformOwn}
                </Grid>
                <Divider />
                <Typography className={clsx(classes.platformTitle,classes.textBlack)}>
                    Your Access
                </Typography>
                <Grid container direction="row"  alignItems="flex-start" spacing={3} className={clsx(classes.platformGrid,classes.textWhite)}>

                </Grid>
            </Container>
          </Grid>
        </Grid>
    </div>    
   ); 
}

export default Platform