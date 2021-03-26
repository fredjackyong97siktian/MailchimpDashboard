import React , {useState} from 'react';
import { Typography,Divider} from '@material-ui/core';
import makeStyle from '../../Connection-style';

interface title {
    servicename:string
}

const ConnectionMetricsDialogCamTitle: React.FC<title>= ({servicename}) => {
    const classes = makeStyle();
    return (
        <div style={{height:'30px'}}> 

        </div>
    );
}

export default  ConnectionMetricsDialogCamTitle