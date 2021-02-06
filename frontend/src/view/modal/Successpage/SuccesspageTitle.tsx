import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Typography, Grid } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

export const SuccesspageTitle : React.FC = () => {
    return (
    <>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">
            <CheckCircleIcon style={{fill:green[800],fontSize: '60px'}}/>
        </Grid>
    </>);
}
