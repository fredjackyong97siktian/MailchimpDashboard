import React, {useEffect , useState ,useContext ,MouseEvent} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import makeStyle from '../Connection-style';
import {FetchContext} from '../../../../context/FetchContext';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import Icon from '../../../../img/brand';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';
import {metricsI} from '../ConnectionInterface';

interface MSL {
    servicename: string,
    imglocation: string,
    metricsData: metricsI,
    onhandleDialogMetrics : (e:MouseEvent, metrics:string, detail: string)=>void,
    onhandleSelectedMetrics : (selected: boolean, metricsId : number)=>void,
}

export const ConnectionMetricsSectionList:React.FC<MSL> = ({servicename,imglocation,metricsData, onhandleDialogMetrics,onhandleSelectedMetrics}) => {
    const classes = makeStyle();
    const {authAxios} = useContext(FetchContext);
    //let state;
    //metricsData.authenticationMetrics[0] ? state = false : state = false;
    let selectBoolean;
    metricsData.authenticationMetrics.length>0 ? selectBoolean = true : selectBoolean = false
    const [select, setSelect] = useState(selectBoolean);

    const onSubmit = () => {
        setSelect(!select)
        onhandleSelectedMetrics(!select,metricsData.id)

    }

    
    const metrics = metricsData.name;
    const detail = metricsData.detail;
    const onhandleDialog = (e: MouseEvent) => {
        onhandleDialogMetrics(e,metrics,detail);
    }
    

//   <Icon name='mailchimp' size='small' />
    return(  
    <Grid item xs={4} md={2} lg={1} > 
        <Paper className={clsx(classes.paper,classes.paperMargin)} elevation={0}>
            <Button onClick={onSubmit} variant="outlined" className={clsx(classes.buttonWidth,classes.buttonHeight,classes.buttonPadding,classes.buttonMetrics, select && classes.buttonMetricsActive)}>
                <Grid container direction="column" justify="flex-start" alignItems="flex-start" className={classes.buttonGrid} >
                    <Grid item xs className={clsx(classes.buttonApp,classes.buttonIcon)}>
                        <Tooltip title={servicename}>
                            <div>
                                <Icon name={imglocation} size='small' />
                            </div>
                        </Tooltip>
                    </Grid>
                    <Grid item xs>
                        <IconButton onClick={onhandleDialog} className={clsx(classes.buttonMark,classes.buttonIcon,classes.buttonMarkDetail)} >
                            <HelpIcon fontSize='small' />
                        </IconButton>
                    </Grid>
                    <Grid item xs className={classes.serviceList}>
                        {metricsData.name }
                    </Grid>
                    <Grid item xs >
                        {select && <CheckCircleIcon fontSize='small' className={clsx(classes.buttonCorrect,classes.buttonIcon)}/> }
                    </Grid>
                </Grid>
            </Button > 
        </Paper>
    </Grid>
    )
}
