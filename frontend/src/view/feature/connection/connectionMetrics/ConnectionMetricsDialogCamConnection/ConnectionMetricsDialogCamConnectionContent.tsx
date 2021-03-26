import React , {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider, Button } from '@material-ui/core';
import makeStyle from '../../Connection-style';
import Icon from '../../../../../img/brand';
import {useDispatch,useSelector  } from 'react-redux';
import {RootState} from './../../../../../reducer';

//import {windowpopOpen} from '../../../../../windowpop/windowpop'
interface Content{
    servicename:string,
    imglocation:string,
    direct_url_component:string,
    windowpopOpen: ()=>void
    
}

const ConnectionMetricsDialogCamConnectionContent: React.FC<Content>= ({servicename,imglocation,direct_url_component,windowpopOpen}) => {
    const classes = makeStyle();
    const MetricsDetail = useSelector((state:RootState)=>state.metrics);

    const onhandleConnection = () => {
        windowpopOpen()
    }
    return (
        <div> 
            <Grid container spacing={0} direction="column"   justify="center" alignItems="center" style={{height:'300px', color:'black',textAlign:'center'}}>
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
            </Grid>
        </div>
    );
}

export default  ConnectionMetricsDialogCamConnectionContent