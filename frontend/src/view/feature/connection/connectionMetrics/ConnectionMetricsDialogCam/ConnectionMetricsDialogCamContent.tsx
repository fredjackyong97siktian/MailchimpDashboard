import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider } from '@material-ui/core';
import makeStyle from '../../Connection-style';
import {AiOutlineBarChart} from 'react-icons/ai';
import {GiPieChart} from 'react-icons/gi';
import {BiPieChartAlt} from 'react-icons/bi';
import {FaRegChartBar} from 'react-icons/fa';
import Box from '@material-ui/core/Box';

interface Content{
   metrics: string,
   detail: string 
}

const ConnectionMetricsDialogCamContent: React.FC<Content>= ({metrics,detail}) => {
    const classes = makeStyle();
    return (
        <div> 
            
            <Grid container spacing={0} direction="column"   justify="flex-start" alignItems="flex-start">
                <Grid item xs >
                <Typography variant="h6" className={classes.dialogContent}> 
                    <b>{metrics}</b>
                </Typography>
                </Grid>
                <Grid item xs >
                    <Box component="span" m={0.5}>
                        <AiOutlineBarChart className={classes.chartIcon}/>
                    </Box>
                </Grid>
                <Grid item xs >
                <Typography variant="body1" style={{height:'300px'}} >
                    {detail}
                </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default  ConnectionMetricsDialogCamContent