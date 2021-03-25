import React , {useState} from 'react';
import { Typography,Divider} from '@material-ui/core';
import makeStyle from '../../Connection-style';

interface title {
    name: string
}

const ConnectionMetricsDialogCamTitle: React.FC<title>= ({name}) => {
    const classes = makeStyle();
    return (
        <div> 
           <Typography className={classes.dialogTitle}> {name} </Typography>
           <Divider />
        </div>
    );
}

export default  ConnectionMetricsDialogCamTitle