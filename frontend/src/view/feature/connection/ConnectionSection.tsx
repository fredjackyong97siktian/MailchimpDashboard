import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import clsx from 'clsx';
import {DashboardGrid} from '../dashboard/DashboardGrid';
import {ConnectionSectionItem} from './ConnectionSectionItem';

export const ConnectionSection:React.FC = () => {
    const classes = makeStyle();
    return(  
        <Grid item xs={12} >               
            <Paper className={classes.paper} elevation={0}>
                <ConnectionSectionItem />
                <ConnectionSectionItem />
                <ConnectionSectionItem />
            </Paper>
        </Grid>
    )
}
