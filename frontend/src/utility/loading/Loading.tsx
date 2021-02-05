import React from 'react';
import useStyles from './Loading-style'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Typography } from '@material-ui/core';

interface LoadingType {
    message:string
}

const Loading: React.FC<LoadingType> = (message) => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">
            <CircularProgress />
            <Typography variant="h6" gutterBottom> {message.message} </Typography>
        </Grid>
      </div>
    );
}

export default Loading