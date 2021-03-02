import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
interface DashboardGridI {
    title: string,
    prop : Array<React.ElementType>,
}

export const ConnectionSection  :React.FC = () => {
    const classes = makeStyle();
    return(
        <>  
            <Grid item xs={12} >
                <span className={classes.topictitle}>
                 
                </span>
            </Grid>
            
        </>
    )
}