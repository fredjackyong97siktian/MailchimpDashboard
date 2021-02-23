import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './../Platform-style'

interface PlatformItemAccessI {
    platform_id: string,
    platformname: string
}

export const PlatformItemAccess:React.FC<PlatformItemAccessI> = ({platform_id,platformname}) => {
    const classes = useStyles();
    return(
        <Grid item xs={12} sm={6} md={4} >
            <Button variant="contained"  className={classes.paper}> xs </Button>
        </Grid>

    )
}