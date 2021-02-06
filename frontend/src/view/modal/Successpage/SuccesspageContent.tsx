import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import {SuccessContent} from './Successpage-interface';

export const SuccesspageContent : React.FC<SuccessContent> = (props) => {
    return (
    <>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">   
        <Typography variant="h5" gutterBottom style={{color:"black"}}><b> {props.success.title} </b> </Typography>
        <Typography variant="subtitle1" gutterBottom > {props.success.explaination} </Typography>
        </Grid>        
    </>);
}
