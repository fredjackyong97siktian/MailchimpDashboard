import React, {useEffect , useState ,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import makeStyle from '../Connection-style';
import clsx from 'clsx';
import {ConnectionMetricsSectionList} from './ConnectionMetricsSectionList';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {FetchContext} from '../../../../context/FetchContext';
import {useHistory , useParams, useLocation} from 'react-router-dom'
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'
import {metricsDisplayI ,metricsI} from '../ConnectionInterface';
import Icon from '../../../../img/brand';
import {windowpopOpen} from '../../../../windowpop/windowpop'
import { Location } from "history";
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

interface Params {
    platformid: string,
    serviceId: string
}
interface Locations {
    authenticationId: string
}
export const ConnectionMetricsSection:React.FC = () => {
    const {state} = useLocation<Location>();
    const {platformid,serviceId}  = useParams<Params>();
    const classes = makeStyle();
    const {authAxios} = useContext(FetchContext);
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

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch({type:PAGE_STATUS_LOADING});
        const category = async() => {
            try{
                const {data} = await authAxios.post(`platform/${platformid}/myconnection/service/${serviceId}`,{
                    "authenticationserviceId":1
                })

                setMetrics(data.data);
                dispatch({type: PAGE_STATUS_SUCCESS});
            }
            catch(error){
                const payload = {message: error.message || error,
                    explaination: ''}
                dispatch({type:PAGE_STATUS_ERROR, payload: payload});
            }
        }
        category()
    },[authAxios])
// <Button variant="contained" onClick={()=>windowpopOpen(`${scope.application.direct_url_component}id=${serviceId}&scope=${item.term}`)} className={classes.buttonWidth}> {item.name } </Button > 
    const scopeOption = metrics.metrics.map((item : metricsI)=>{
       return(
        <ConnectionMetricsSectionList name={item.name} servicename={metrics.service_name} imglocation={metrics.application.imglocation}/>
       )
    })
//  <ConnectionSectionItem />
    return(  
        <Grid item xs={12} >               
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
            </Paper>
        </Grid>
    )
}
