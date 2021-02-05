import React from 'react'
import WarningIcon from '@material-ui/icons/Warning'; 
import { Typography, Grid } from '@material-ui/core';

export const ErrorpageTitle : React.FC = () => {
    return (
    <>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">
            <WarningIcon color='error' style={{fontSize: '60px'}}/>
        </Grid>
    </>);
}
