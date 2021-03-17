import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from '../Connection-style';
import {SiXero }  from 'react-icons/si';
import clsx from 'clsx';
import {IoEllipsisVerticalSharp, IoBeaker} from 'react-icons/io5'
import {GrAction} from 'react-icons/gr'
import HelpIcon from '@material-ui/icons/Help';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, IconButton } from '@material-ui/core';
import {applicationI} from '../ConnectionInterface';
import {ConnectionSectionContextMenuDisconnected,
    ConnectionSectionContextMenuConnected,
    ConnectionSectionContextMenuScope} from './ConnectionSectionContextMenu';

interface propI {
    status: 'connected'| 'disconnected'| 'noconnection',
    application: applicationI
}

export const ConnectionSectionItemListStatus :React.FC<propI> = ({status,application}) => {
    const classes = makeStyle();
    let statusDetail={
        color:'green',
        display:'Connected',
        icon: <CheckCircleIcon />,
        context:<ConnectionSectionContextMenuConnected />
    }
    switch(status){
        case 'connected':
            statusDetail = {
                color:'green',
                display:'Connected',
                icon: <CheckCircleIcon style={{ fontSize: 35, color:'green'}}/>,
                context:<ConnectionSectionContextMenuConnected />}
            break;
        case 'disconnected':
            statusDetail = {
                color:'red',
                display:'Disconnected',
                icon: <CancelIcon style={{ fontSize: 35, color:'red'}}/>,
                context: <ConnectionSectionContextMenuDisconnected /> }
                break;
       /* case 'noconnection':
            statusDetail = {
                color:'black',
                display:'Not Yet Connect',
                icon: <HelpIcon style={{ fontSize: 35, color:'black'}}/>,
                context:<ConnectionSectionContextMenuNoConnection />}
                break;*/
    }
    /*{statusDetail.icon}  {statusDetail.display}*/
    return(
        <>
            <Grid item xs={4} sm={2} className={classes.appdetail}>
                <Grid container direction="column" alignItems="center" className={classes.appstatus}>  
                    <Grid item xs={12} >
                        
                    </Grid>     
                    <Grid item xs={12} className={classes.appstatustext} style={{ color: statusDetail.color}}>
                       
                    </Grid>                               
                </Grid>
            </Grid>
            <Grid item xs={1} className={classes.appdetail}>
                 <Grid container direction="column" justify="flex-end" alignItems="flex-end" >    
                    <Grid item xs={12} className={classes.appd}>
                        
                    </Grid>                               
                </Grid>
            </Grid>
        </>

    )
}
