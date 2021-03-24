import React, {useEffect , useState ,useContext} from 'react';
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

interface MSL {
    servicename: string,
    imglocation: string,
    name: string
}

export const ConnectionMetricsSectionList:React.FC<MSL> = ({servicename,imglocation,name}) => {
    const classes = makeStyle();
    const {authAxios} = useContext(FetchContext);
    const [select, setSelect] = useState(false);
    
    const onSubmit = () => {
        setSelect(!select)
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
                        <IconButton onClick={onSubmit} className={clsx(classes.buttonMark,classes.buttonIcon,classes.buttonMarkDetail)} >
                            <HelpIcon fontSize='small' />
                        </IconButton>
                    </Grid>
                    <Grid item xs className={classes.serviceList}>
                        {name }
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
