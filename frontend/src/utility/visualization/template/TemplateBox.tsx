import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './TemplateBox-style';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import clsx from 'clsx';
import { Typography, Button ,IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Scoreline} from './../scoreline/Scoreline';
import {SortableHandle} from 'react-sortable-hoc';
interface TemplateBoxI{
    itemId?:string,
    body: React.ElementType
}
const TemplateBox : React.FC<TemplateBoxI> = ({itemId,body}) => {
    //draghandle
    const DragHandle = SortableHandle(()=>(
        <IconButton className={clsx(classes.position,classes.topleft,classes.button)}  >
            <OpenWithIcon/>   
        </IconButton>
    ))
    //<Scoreline chartData={chartData} Date={minmaxDate} Y={Y}/>
    const chartData = [
        { x: new Date(2016,5,1), y: 100  },
        { x: new  Date(2016,5,2), y: 150  },
        { x: new Date(2016,5,3), y: 152  },
        { x: new  Date(2016,5,4), y: 125  },
        { x: new Date(2016,5,5), y: 175  },
        { x: new  Date(2016,5,6), y: 200  },
        { x: new  Date(2016,5,7), y: 300  },
        ]
    const  minmaxDate = {
            minDate : new Date(2016,5,1),
            maxDate : new  Date(2016,5,7),
        }
    const  Y = {
            minY : 100,
            maxY : 300
        }
    const bodyT = <body />
    const classes = useStyles();
    const ButtonChoose =  <Button variant="contained" className={classes.subtitleButton} >
                        <span className={classes.subtitleButtontext}>
                            All Automation
                        </span>
                        <span>
                            <ExpandMoreIcon fontSize="small" className={classes.subtitleButtonicon}/>
                        </span>
                    </Button>  
    return  (
        <div >
            <Grid container direction="column" justify="center" alignItems="center" className={classes.margin} >
                <Paper className={clsx(classes.paper,classes.relative)} >   
                    <Grid item xs={12} className={clsx(classes.size,classes.padding)}>
                        <Grid container direction="row" justify="center" alignItems="center" className={classes.relative}>
                            <Grid item xs={2} >
                                <DragHandle />
                            </Grid>
                            <Grid item xs={8} >
                                <Typography align='center' className={classes.title}>
                                    Click Rate {itemId}
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
                    <Grid item xs={12} >
                        <Paper className={clsx(classes.bottom)} >
                            <Scoreline chartData={chartData} />
                        </Paper>
                    </Grid>
                </Paper>
            </Grid>
            
        </div>
    )
}

export default React.memo(TemplateBox)