import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import {SiXero }  from 'react-icons/si';
import clsx from 'clsx';
import {IoEllipsisVerticalSharp} from 'react-icons/io5'
import HelpIcon from '@material-ui/icons/Help';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, IconButton } from '@material-ui/core';
import {ConnectionSectionItemListStatus} from './ConnectionSectionItemListStatus';
export const ConnectionSectionItemList :React.FC = () => {
    const classes = makeStyle();
    return(

          <Grid item xs={12} md={6} lg={4} >
          <Paper className={clsx(classes.paper,classes.grid,classes.paperPadding)} >
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item xs={12} >
                        <Grid container direction="row" justify="center" alignItems="center"  className={classes.item}>
                            <Grid item xs={3} sm={2} className={classes.icon}>
                                <SiXero size={50}/>
                            </Grid>
                            <Grid item xs={4} sm={7} className={classes.appdetail}>
                                <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
                                    <Grid item xs={12} className={classes.appn}>
                                        Xero
                                    </Grid>     
                                    <Grid item xs={12} className={classes.appd}>
                                        AppDescription
                                    </Grid>                               
                                </Grid>
                            </Grid>
                            <ConnectionSectionItemListStatus status='connected'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>

    )
}