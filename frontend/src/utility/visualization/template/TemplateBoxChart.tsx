import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './TemplateBox-style';
import clsx from 'clsx';

const TemplateBoxChart : React.FC = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} >
            <Paper className={clsx(classes.bottom)} >
                hahahahahahsss
            </Paper>
        </Grid>
    )
}

export default TemplateBoxChart