import React ,{useState,useEffect,useCallback,useMemo} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './TemplateBox-style';
import clsx from 'clsx';
import {findMinMaxY, findMinMaxDate} from './TemplateMinMax';

interface TemplateBoxChartI{
  body: React.ReactNode
}
const TemplateBoxChart : React.FC<TemplateBoxChartI> = ({body}) => {
    const classes = useStyles();
    
    const chartData = [
      { x: new Date(2016,5,1), y: 100  },
      { x: new  Date(2016,5,2), y: 150  },
      { x: new Date(2016,5,3), y: 152  },
      { x: new  Date(2016,5,4), y: 125  },
      { x: new Date(2016,5,5), y: 175  },
      { x: new  Date(2016,5,6), y: 200  },
      { x: new  Date(2016,5,7), y: 300  },
      ]
      //const [MinMaxY,setMinMaxY] = useState([0,0]);
      //const [MinMaxDate,setMinMaxDate] = useState([new Date, new Date]);

      /*useEffect(()=>{
        setMinMaxY(findMinMaxY(chartData));
        setMinMaxDate(findMinMaxDate(chartData));
      },[])*/

      /*useMemo(() =>{
        setMinMaxY(findMinMaxY(chartData));
        return true
      },[])

       useMemo(()=>{  
        setMinMaxDate(findMinMaxDate(chartData));
        return true
      },[]);*/


    return (
        <Grid item xs={12} >
            <Paper className={clsx(classes.bottom)} >
                <body />
            </Paper>
        </Grid>
    )
}

export default TemplateBoxChart