import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import clsx from 'clsx';
import {ConnectionSectionItemList} from './ConnectionSectionItemList';
import {DashboardGrid} from '../dashboard/DashboardGrid';
import {categoryI} from './ConnectionInterface';


export const ConnectionSectionItem  :React.FC<categoryI> = ({name, services}) => {
    const classes = makeStyle();
    const title="My Connection"
    const service = services.map((item)=>{
        return(
            <ConnectionSectionItemList id={item.id} description={item.description} service_name={item.service_name} application={item.application} />
        )
    })

    return(
        <span className={classes.sectionitem}>
        <span className={clsx(classes.subtopictitle,classes.paperPadding)}>
         {name}
        </span>
        <Grid container direction="row" justify="flex-start" alignItems="center" >
            {service}
        </Grid>
        </span>
    )
}