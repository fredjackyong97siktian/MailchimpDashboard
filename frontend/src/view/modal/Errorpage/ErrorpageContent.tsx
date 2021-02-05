import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import {message} from './Errorpage-interface';



export const ErrorpageContent : React.FC<message> = (props) => {
    return (
    <>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">   
        <Typography variant="h5" gutterBottom style={{color:"black"}}><b> Oh Snap! </b> </Typography>
        <Typography variant="h6" gutterBottom > {props.error.message} </Typography> <br/>
        <Typography variant="subtitle1" gutterBottom > Error Code: {props.error.code} ({props.error.explaination}) </Typography>
        </Grid>        
    </>);
}
