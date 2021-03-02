import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import {SiXero }  from 'react-icons/si';
import {IoEllipsisVerticalSharp} from 'react-icons/io5'
import HelpIcon from '@material-ui/icons/Help';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, IconButton } from '@material-ui/core';

export const ConnectionSectionItem :React.FC = () => {
    const classes = makeStyle();
    return(
        <>  
          <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper}>
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item xs={12}>
                        <Grid container direction="row"   justify="center" alignItems="center"  className={classes.item}>
                            <Grid item xs={2} className={classes.icon}>
                                <SiXero size={50}/>
                            </Grid>
                            <Grid item xs={7} className={classes.appdetail}>
                                <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
                                    <Grid item xs={12} className={classes.appn}>
                                        Xero
                                    </Grid>     
                                    <Grid item xs={12} className={classes.appd}>
                                        AppDescription
                                    </Grid>                               
                                </Grid>
                            </Grid>
                            <Grid item xs={2} className={classes.appdetail}>
                                <Grid container direction="column" alignItems="center" className={classes.appstatus}>  
                                    <Grid item xs={12} >
                                        <CheckCircleIcon style={{ fontSize: 35, color:'green'}}/>
                                    </Grid>     
                                    <Grid item xs={12} className={classes.appstatustext}>
                                            Disconnected
                                    </Grid>                               
                                </Grid>
                            </Grid>
                            <Grid item xs={1} className={classes.appdetail}>
                                <Grid container direction="column" justify="flex-end" alignItems="flex-end" >    
                                    <Grid item xs={12} className={classes.appd}>
                                        <IconButton size='small'>
                                            <IoEllipsisVerticalSharp size={17}/>
                                        </IconButton>
                                    </Grid>                               
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
            
        </>
    )
}