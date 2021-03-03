import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import clsx from 'clsx';
import {ConnectionSectionItemList} from './ConnectionSectionItemList';
import {DashboardGrid} from '../dashboard/DashboardGrid';

export const ConnectionSectionItem  :React.FC = () => {
    const classes = makeStyle();
    const title="My Connection"

    return(
        <span className={classes.sectionitem}>
        <span className={clsx(classes.subtopictitle,classes.paperPadding)}>
        Product
        </span>
        <Grid container direction="row" justify="flex-start" alignItems="center" >
            <ConnectionSectionItemList />
            <ConnectionSectionItemList />
            <ConnectionSectionItemList />
            <ConnectionSectionItemList />
            <ConnectionSectionItemList />
        </Grid>
        </span>
    )
}