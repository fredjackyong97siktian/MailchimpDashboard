import React,{useEffect,useState,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './TemplateBox-style';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import clsx from 'clsx';
import { Typography, Button ,IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {FetchContext} from '../../../context/FetchContext';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Scoreline} from './../scoreline/Scoreline';
import {SortableHandle} from 'react-sortable-hoc';
import {VPI} from './../../../view/feature/visualization/dashboard/Dashboard'
import Visualization from './../index';
import CircularProgress from '@material-ui/core/CircularProgress';
interface TemplateBoxI{
    item : VPI,
    //body: React.ElementType
}
const TemplateBox : React.FC<TemplateBoxI> = ({item}) => {
    //draghandle
    const util = require('util')
    const DragHandle = SortableHandle(()=>(
        <IconButton className={clsx(classes.position,classes.topleft,classes.button)}  >
            <OpenWithIcon/>   
        </IconButton>
    ))
    console.log(`id: ${item.id}, visualizationId: ${item.visualizationId}, visualization: ${item.visualization}`)
    //<Scoreline chartData={chartData} Date={minmaxDate} Y={Y}/>
    const {authAxios} = useContext(FetchContext);
    const [data, setData] = useState<any>();
    const [display,setDisplay] = useState<Array<string>>();
    const [loading,setLoading] = useState(true)
    
//item.visualization.subchart.chart.charttype.name
    useEffect(()=>{
        let isMounted = true;
          const retrieveData = ()=>{
            try{
                authAxios.get(`oauth/app/${(item.visualization.metrics.service.application.name).toLowerCase()}/${item.visualization.metrics.api}`,{
                    params:{
                        authenticationId: item.visualization.metrics.service.authenticationServices[0].authentication.authentication_id,
                        name: item.visualization.metrics.service.application.name,
                        apid: item.visualization.metrics.service.authenticationServices[0].ap_id,
                        method: item.visualization.subchart.chart.charttype.name,
                        selection: item.selection,
                    }
                }).then((data:any)=>{
                    console.log(item.visualization.metrics.api)
                    console.log(item.visualization.subchart.reference_component)
                    //console.log(util.inspect(data.data.result.returnData, {showHidden: false, depth: null}))
                   // console.log(`This is Tempalte Box Area${data}`)
                   if (isMounted) setData(data.data.result.returnData);
                   isMounted && data.data.result.display && (data.data.result.display).length> 0 ? setDisplay(data.data.result.display) : setDisplay([]);
                   if (isMounted)setLoading(false)
                })
            }catch(error){
                console.log(error)
                if (isMounted) setLoading(false)
            }            
        }
        retrieveData();
        
        return () => { isMounted = false };
    },[])
//
    const chartData = [
        { x: new Date(2016,5,1), y: 100  },
   /*     { x: new  Date(2016,5,2), y: 150  },
        { x: new Date(2016,5,3), y: 152  },
        { x: new  Date(2016,5,4), y: 125  },
        { x: new Date(2016,5,5), y: 175  },
        { x: new  Date(2016,5,6), y: 200  },
        { x: new  Date(2016,5,7), y: 300  },*/
        ]
    const  minmaxDate = {
            minDate : new Date(2016,5,1),
            maxDate : new  Date(2016,5,7),
        }
    const  Y = {
            minY : 100,
            maxY : 300
        }
    console.log(chartData)
   
    //console.log(data[0] + 'this is')
    const bodyT = <body />
    const classes = useStyles();
    const ButtonChoose =  <Button variant="contained" className={classes.subtitleButton} >
                                <span className={classes.subtitleButtontext}>
                                    All Automation
                                </span>
                                <span>
                                    <ExpandMoreIcon fontSize="small" className={classes.subtitleButtonicon}/>
                                </span>
                            </Button>  
                    //<Scoreline chartData={chartData} />

                    //
    return  (
        <div >
            <Grid container direction="column" justify="center" alignItems="center" className={classes.margin} >
                <Paper className={clsx(classes.paper,classes.relative)} >   
                    <Grid item xs={12} className={clsx(classes.size,classes.padding)}>
                        <Grid container direction="row" justify="center" alignItems="center" className={classes.relative}>
                            <Grid item xs={2} >
                                <DragHandle />
                            </Grid>
                            <Grid item xs={8} >
                                <Typography align='center' className={classes.title}>
                                    {item.visualization.metrics.displayName}
                                </Typography>
                                <Typography align='center' className={classes.subtitle} >
                                    {ButtonChoose}
                                </Typography>   
                            </Grid>
                            <Grid item xs={2} >
                                <IconButton className={clsx(classes.position,classes.topright,classes.button)}>
                                    <MoreVertIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Paper className={clsx(classes.bottom)} style={{opacity: loading ? 0.25 : 1}}>
                        <Visualization chartProps={data} name={item.visualization.subchart.reference_component} display={display}/>
                        </Paper>
                    </Grid>
                    {loading && <CircularProgress className={clsx(classes.progressBar,classes.bottom)} />} 
                </Paper>
            </Grid>
        </div>
    )
}

export default TemplateBox