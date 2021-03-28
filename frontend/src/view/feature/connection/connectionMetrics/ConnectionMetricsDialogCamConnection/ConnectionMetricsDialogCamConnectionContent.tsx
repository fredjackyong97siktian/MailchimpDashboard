import React , {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider, Button } from '@material-ui/core';
import makeStyle from '../../Connection-style';
import Icon from '../../../../../img/brand';
import {useDispatch,useSelector  } from 'react-redux';
import {RootState} from './../../../../../reducer';
import CircularProgress from '@material-ui/core/CircularProgress';

//import {windowpopOpen} from '../../../../../windowpop/windowpop'
interface Content{
    onhandleRecall:()=>void,
    onWindowClose:()=>void,
    servicename:string,
    imglocation:string,
    direct_url_component:string,
    windowpopOpen: ()=>void
    
}

const ConnectionMetricsDialogCamConnectionContent: React.FC<Content>= ({onhandleRecall,onWindowClose,servicename,imglocation,direct_url_component,windowpopOpen}) => {
    const MetricsDetail = useSelector((state:RootState)=>state.metrics);
    const classes = makeStyle();
    const dispatch = useDispatch();
    const [change,setChange] = useState(false)
    useEffect(()=>{
        if(MetricsDetail.service){
            setChange(true)
            //recall the onsubmit function to save the selectedMetrics
            onhandleRecall();
            //close the dialog
            setTimeout(()=>onWindowClose(),5000);
        }
    },[MetricsDetail.service])
    const onhandleConnection = () => {
        windowpopOpen()
    }

    const serviceConnect =  <>
                            <Grid item xs>
                            <Typography variant="h3" >
                                <Icon name={imglocation} /> {servicename}
                            </Typography>         
                            <Typography variant="h6">
                                Please connect to <b>{servicename}</b> before getting the metrics. 
                            </Typography>                      
                            </Grid>
                            <Grid item xs >
                                <Button onClick={()=>onhandleConnection()} variant="contained" style={{backgroundColor:'green',color:'white'}}> Connect to {servicename}</Button>
                            </Grid> 
                            </>
    const serviceLoading = <> <CircularProgress /> <br/> Loading... </>
    return (
        <div> 
            <Grid container spacing={0} direction="column"   justify="center" alignItems="center" style={{height:'300px', color:'black',textAlign:'center'}}>
                {!change && serviceConnect}
                {change && serviceLoading}
            </Grid>
        </div>
    );
}

export default  ConnectionMetricsDialogCamConnectionContent