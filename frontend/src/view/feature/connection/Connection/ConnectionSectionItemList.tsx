import React , {useEffect, useState ,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from '../Connection-style';
import clsx from 'clsx';
import {ConnectionSectionItemListStatus} from './ConnectionSectionItemListStatus';
import {serviceI} from '../ConnectionInterface';
import Icon from '../../../../img/brand';
import {useParams} from 'react-router-dom'
import {FetchContext} from '../../../../context/FetchContext';
import {apI} from '../ConnectionInterface';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ConnectionSectionContextMenuMetrics} from './ConnectionSectionContextMenu';
interface Params {
    platformid: string
}

// <SiXero size={50}/>
export const ConnectionSectionItemList :React.FC<serviceI> = ({id,description,service_name,application}) => {
    const classes = makeStyle();
    const {platformid}  = useParams<Params>();
    const {authAxios} = useContext(FetchContext);
    const [loading, setLoading] = useState(true);
    const [authApp, setAuthApp] = useState<apI>({    
        authenticationservice_id: 0,
        authenticationservice_ap_id:null,
        authentication_authentication_id: null});

    // Will move this into Connection Scope
    useEffect(()=>{
        const AuthApp = async() => {
            const {data} = await authAxios.post("platform/"+platformid+"/myconnection/app",{serviceid:id})
            if(data.data){setAuthApp(data.data);}   
            setLoading(false);  
        }
        AuthApp();        
    },[])

    //console.log(application.imglocation)
    /*                            <Grid item xs={4} sm={2} className={classes.appdetail}>
                                <Grid container direction="column" alignItems="center" className={classes.appstatus}>  
                                    <Grid item xs={12} >
                                        
                                    </Grid>     
                                    <Grid item xs={12} className={classes.appstatustext} style={{ color: 'black'}}>
                                    
                                    </Grid>                               
                                </Grid>
                            </Grid>*/
    return(
          <Grid item xs={12} md={6} lg={4} >
          <Paper className={clsx(classes.paper,classes.grid,classes.paperPadding)} >
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item xs={12} >
                        <Grid container direction="row" justify="center" alignItems="center"  className={classes.item}>
                            <Grid item xs={3} sm={2} className={classes.icon}>
                               <Icon name={application.imglocation} />
                            </Grid>
                            <Grid item xs={8} sm={9} className={classes.appdetail}>
                                <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
                                    <Grid item xs={12} className={classes.appn}>
                                        {service_name}
                                    </Grid>     
                                    <Grid item xs={12} className={classes.appd}>
                                        {description}
                                    </Grid>                               
                                </Grid>
                            </Grid>
                            <Grid item xs={1} className={classes.appdetail}>
                                <Grid container direction="column" justify="flex-end" alignItems="flex-end" >    
                                    <Grid item xs={12} className={classes.appd}>
                                        <ConnectionSectionContextMenuMetrics serviceId={id} authenticationServiceId={authApp.authenticationservice_ap_id}/>
                                    </Grid>                               
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
    )
}