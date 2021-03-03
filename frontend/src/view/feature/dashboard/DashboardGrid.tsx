import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Dashboard-style';
interface DashboardGridI {
    title: string,
    prop : React.ReactNode,
}

/*            <Grid item xs={12}>
                <Paper className={classes.paper} style={{height:'250px'}}>
                    <span className={classes.papertitle}>
                        Dashboard
                    </span>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            Pikachu
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>*/

export const DashboardGrid :React.FC<DashboardGridI> = ({title,prop}) => {
    const classes = makeStyle();
    return(
        <>  
            <Grid item xs={12} >
                <span className={classes.topictitle}>
                 {title}
                </span>
                {prop}
            </Grid>
            
        </>
    )
}