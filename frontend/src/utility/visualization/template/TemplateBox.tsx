import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './TemplateBox-style';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import clsx from 'clsx';
import { Typography, Button ,IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TemplateBoxChart from './TemplateBoxChart';

const TemplateBox : React.FC = () => {
    const classes = useStyles();
    const ButtonChoose =  <Button variant="contained" className={classes.subtitleButton} >
                        <span className={classes.subtitleButtontext}>
                            All Automation
                        </span>
                        <span>
                            <ExpandMoreIcon fontSize="small" className={classes.subtitleButtonicon}/>
                        </span>
                    </Button>  
    return (
        <>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.margin}>
                <Paper className={clsx(classes.paper,classes.relative)} >   
                    <Grid item xs={12} className={clsx(classes.size,classes.padding)}>
                        <Grid container direction="row" justify="center" alignItems="center" className={classes.relative}>
                            <Grid item xs={2} >
                                <IconButton className={clsx(classes.position,classes.topleft,classes.button)}>
                                    <OpenWithIcon/>   
                                </IconButton>
                            </Grid>
                            <Grid item xs={8} >
                                <Typography align='center' className={classes.title}>
                                    Click Rate
                                </Typography>
                                <Typography align='center' className={classes.subtitle} >
                                    {ButtonChoose}
                                </Typography>   
                            </Grid>
                            <Grid item xs={2} >
                                <IconButton className={clsx(classes.position,classes.topright,classes.button)}>
                                    <MoreVertIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <TemplateBoxChart />
                </Paper>
            </Grid>
            
        </>
    )
}

export default TemplateBox