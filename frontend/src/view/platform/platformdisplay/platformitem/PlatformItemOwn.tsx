import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './../Platform-style'

interface PlatformItemOwnI {
    platform_id: string,
    platformname: string,
    onClick: (platform_id : string) => void;
}

export const PlatformItemOwn:React.FC<PlatformItemOwnI> = ({platform_id,platformname,onClick}) => {
    const classes = useStyles();
    const id = platformname + '-' + platform_id;
    return(
            <Grid item xs={12} sm={6} md={4} >
                <Button variant="contained"  className={classes.paper} onClick={()=>onClick(id)}> 
                    <Grid container  direction="column" justify="flex-start" alignItems="flex-start" className={classes.platformPlatformDetail}>
                        <Typography align="left" noWrap={false} className={clsx(classes.platformButtonWidth,
                                          classes.platformPlatformDetailTitle,
                                                                                  classes.platformPlatformDetailWord,
                                                                                  classes.textBlack
                                                                                  )}  >
                            {platformname}
                        </Typography> 
                        <Typography align="left" className={clsx(classes.platformButtonWidth,classes.platformPlatformDetailDesc,classes.platformPlatformDetailWord)} variant="body2" >
                           {id}  
                        </Typography> 
                    </Grid>
                </Button>
            </Grid>
    )
}