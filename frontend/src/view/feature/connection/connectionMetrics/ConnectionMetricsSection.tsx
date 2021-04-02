import React, {useEffect , useState ,useContext, MouseEvent} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import makeStyle from '../Connection-style';
import clsx from 'clsx';
import {ConnectionMetricsSectionList} from './ConnectionMetricsSectionList';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {FetchContext} from '../../../../context/FetchContext';
import {useHistory , useParams, useLocation} from 'react-router-dom'
import {RootState} from './../../../../reducer';
import {useDispatch,useSelector  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'
import {CONNECTION_CONNECTING,CONNECTION_RECOVER, CONNECTION_SERVICE_SUCCESSFUL, CONNECTION_SERVICE_FAIL, CONNECTION_METRICS_SUCCESSFUL,CONNECTION_METRICS_FAIL} from './redux/ConnectionMetricsConstant';
import {metricsDisplayI ,metricsI} from '../ConnectionInterface';
import ConnectionMetricsDialogCam from './ConnectionMetricsDialogCam/ConnectionMetricsDialogCam';
import ConnectionMetricsDialogCamConnection from './ConnectionMetricsDialogCamConnection/ConnectionMetricsDialogCamConnection';
import Icon from '../../../../img/brand';
import { Location } from "history";
import { useSnackbar } from 'notistack';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

interface Params {
    platformid: string,
    serviceId: string
}
interface Locations {
    authenticationId: string
}

var myWindow: any;

function arraysEqual(a : Array<number>, b:Array<number>) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

export const ConnectionMetricsSection:React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {state} = useLocation<Location>();
    //const state = null
    const {platformid,serviceId}  = useParams<Params>();
    const classes = makeStyle();
    const {authAxios} = useContext(FetchContext);
    const dispatch = useDispatch();
    const MetricsDetail = useSelector((state:RootState)=>state.metrics);
    //recall the onsubmit once they connect to the service
    const [recall, setRecall]= useState(false);
    const onhandleRecall = () => {
        setRecall(true);
    }
    //obtaing all metrics information
    const [metrics, setMetrics] = useState<metricsDisplayI>({
        service_name:'',
        metrics:[],
        application: {
            name: '',
            auth_method: '',
            direct_url_component: '',
            imglocation: ''
        }
    });
    //for user to check the detail of the metrics
    const [dialog, setDialog] = useState(false);
    //setting dialog content
    const [dialogMetrics, setDialogMetrics] = useState({
        metrics: '',
        detail: ''
    });
    //selected metrics
    const [selectedMetrics,setSelectedMetrics] = useState<Array<number>>([])
    //connection
    const [connection,setConnection] = useState(false);

    const onhandleSetConnectionOpen = () => {
        setConnection(true);
    }

    const onhandleSetConnectionClose = () => {
        setConnection(false);
    }

    const onhandleDialogMetrics = (e:MouseEvent,metrics : string,detail : string) => {
        e.stopPropagation();
        setDialog(true);
        setDialogMetrics({
            metrics: metrics,
            detail: detail            
        })
    }

    const onhandleSelectedMetrics = (selected: boolean, metricsId : number) => {
            if(selected){
                setSelectedMetrics([...selectedMetrics,metricsId])
            }else{
                setSelectedMetrics(selectedMetrics.filter(item => item !== metricsId));
            }
    }

    const onhandleDialogClose = () => {
        setDialog(false);
    }

    useEffect(()=>{
        alert('Let Start Again :D');
        dispatch({type:PAGE_STATUS_LOADING});
        dispatch({type:CONNECTION_RECOVER});
        const category = async() => {
            try{
                //state
                const {data} = await authAxios.post(`platform/${platformid}/myconnection/service/${serviceId}`,{
                    "ap_id": state
                })
                setMetrics(data.data);
                dispatch({type:CONNECTION_CONNECTING,payload:{app:data.data.service_name}});
                if(state){
                    data.data.metrics.map((item:any)=>{
                        item.authenticationMetrics.length>0 && selectedMetrics.push(item.id)
                     })
                     setSelectedMetrics([ ...new Set(selectedMetrics)])
                     selectedMetrics.sort((a,b)=>a-b)
                     dispatch({type:CONNECTION_SERVICE_SUCCESSFUL,payload:{service:state}});
                     dispatch({type:CONNECTION_METRICS_SUCCESSFUL,payload:selectedMetrics})
                }
                ;
                dispatch({type: PAGE_STATUS_SUCCESS});;
            }  
            catch(error){
                const payload = {message: error.message || error,
                    explaination: ''}
                dispatch({type:PAGE_STATUS_ERROR, payload: payload});
            }
        }
        category()
    },[authAxios])

    useEffect(()=>{
        console.log('Check this out!!!!!')
        console.log(selectedMetrics)
    },[selectedMetrics])

    const onSubmit = () => {
        alert(selectedMetrics)
        dispatch({type:PAGE_STATUS_LOADING});
        const submit = async() => {
            try{
                if(selectedMetrics.length === 0){
                    throw "Select at least one metrics";
                }
                selectedMetrics.sort((a,b)=>a-b)
                if(!MetricsDetail.service){
                    //open the dialog for app connection
                    onhandleSetConnectionOpen();
                }else if(!arraysEqual(selectedMetrics,MetricsDetail.metrics)){
                    //remove duplicaiton in the list to avoid mistake
                    //const RemovedDuplicationMetrics = [ ...new Set(selectedMetrics) ]
                    //RemovedDuplicationMetrics.sort((a,b)=>a-b)
                    alert(selectedMetrics)
                    await dispatch({type:CONNECTION_METRICS_SUCCESSFUL,payload:selectedMetrics});
                    
                    //have to use selectedMetrics instead of MetricsDetail.selectedMetrics as dispatch is not finished.
                    console.log('These are the servsicess '+MetricsDetail.metrics);
                        await authAxios.post(`platform/${platformid}/myconnection/metrics`,{
                            "metrics": selectedMetrics,
                            "service": MetricsDetail.service
                        })
                }
                enqueueSnackbar('Your metrics is saved.',{variant: 'success'});
                dispatch({type: PAGE_STATUS_SUCCESS});
            }
            catch(error){
                const payload = {message: error.message || error,
                    explaination: ''}
                dispatch({type:PAGE_STATUS_ERROR, payload: payload});
            }
        }
        submit()
    }

    //used for those who havent conenct to the applicaiton. Once settle down 
    useEffect(()=>{
        if(recall){
            onSubmit();
        }
    },[recall])

//<Button variant="outlined"  className={classes.grid} style={{color:'purple',borderColor:'purple'}}> Reset </Button>
    const scopeOption = metrics.metrics.map((item : metricsI)=>{
       return(
        <ConnectionMetricsSectionList metricsData={item} servicename={metrics.service_name} imglocation={metrics.application.imglocation} onhandleSelectedMetrics={onhandleSelectedMetrics} onhandleDialogMetrics={onhandleDialogMetrics}/>
       )
    })
//  <ConnectionSectionItem />
    return(  
        <Grid item xs={12} > 
            {!state && connection && <ConnectionMetricsDialogCamConnection platformid={platformid} sid={serviceId} onhandleRecall={onhandleRecall} myWindow={myWindow} servicename={metrics.service_name} imglocation={metrics.application.imglocation} open={connection} onClose={onhandleSetConnectionClose} direct_url_component={metrics.application.direct_url_component}/>}
            <ConnectionMetricsDialogCam open={dialog} onClose={onhandleDialogClose} detail={dialogMetrics} servicename={metrics.service_name}/>              
            <Paper className={classes.paper} elevation={0}>

                <Grid container direction="row" justify="flex-start" alignItems="center" >
                    <span className={clsx(classes.subtopictitle,classes.paperPadding,classes.position)}>
                        <Icon name={metrics.application.imglocation} />
                        <span className={classes.grid}>
                         {metrics.service_name} 
                        </span>
                        <Chip label="Beta" variant="outlined" className={classes.buttonDetail} size="small" style={{backgroundColor:'#AAAAAA'}}/>
                        <Chip label={state? "Connected" : "Not Connected"} className={classes.buttonDetail} variant="outlined" size="small" style={{backgroundColor:state?'green':'red', color:'white'}}/> 
                    </span>
                </Grid>
                <Grid container direction="row" justify="flex-start" className={clsx(classes.subtopictitle,classes.paperPadding)}>
                   Metrics :
                </Grid>
                <Grid container direction="row" justify="flex-start" className={classes.buttonMargin}>
                    {scopeOption}
                </Grid>
                <Grid container direction="row" justify="center" className={classes.buttonMargin}>
                    <Button onClick={onSubmit} variant="contained" className={classes.grid} style={{backgroundColor:'#03AC13',borderColor:'green'}}> Select [{selectedMetrics.length}] </Button> 
                </Grid>                
            </Paper>
        </Grid>
    )
}
