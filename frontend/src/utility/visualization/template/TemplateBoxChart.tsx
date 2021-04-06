import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './TemplateBox-style';
import clsx from 'clsx';
import { VictoryLine ,VictoryTooltip ,VictoryChart,VictoryVoronoiContainer,VictoryContainer, VictoryAxis ,VictoryLabel} from 'victory';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';



const CustomFlyout :React.FC = ({x , y}:any)=>{
    const newY = y - 70;
    const newX = x - 50
return(
    <>
      <g>
        <circle cx={x} cy={y} r="5" stroke="black" height="50" width="100" strokeWidth="3" fill="white"/>
        
        <rect x={newX} y={newY} height="50" width="100" fill="white" stroke="black"/>
        <text x={newX} y={newY+50} font-family="Verdana" font-size="35" fill="blue">{x}</text>
        
      </g>
    </>
)
}

const TemplateBoxChart : React.FC = () => {
    const classes = useStyles();
    const sansSerif = "'Gill Sans', 'Seravek', 'Trebuchet MS', sans-serif";
    const baseLabelStyles = {
        fontFamily: sansSerif,
        fontSize : 14,
        letterSpacing : "normal",
        padding: 15,
        stroke: "transparent"
      };

    const chartTheme = {
        axis: {
          style: {
            axis: {
                stroke: 'transparent',               
            },
            tickLabels: baseLabelStyles,
            grid: {
                fill: "none",
                stroke: "none",
            },
          },
        },
      };
      /*                    <span className={classes.figure}>
                        23%
                    </span>
                  style={{backgroundColor:'yellow'}}                   
                        */
    return (
        <Grid item xs={12} >
            <Paper className={clsx(classes.bottom)} >
                <div className={classes.datasample}>
                    <span className={classes.figure}>
                            230 <span className={classes.figureUnit}> c/p </span>
                    </span>
  
                    <div className={clsx(classes.figurePercent,classes.green)}>
                            <span ><ArrowDropUpIcon className={clsx(classes.icon)}/> </span>
                            <span >23% (+2450)</span>
                    </div>
                </div>
                <div className={classes.chartborder} >
                    <VictoryChart 
                            //get the max and min of y and minus 30 and plus 30
                            domain={{ y: [70,530] }}
                            height={300}
                            width={400}
                            theme={ chartTheme }
                            containerComponent={
                                <VictoryVoronoiContainer/>
                            }
                            >
                            <VictoryAxis
                                    
                                    dependentAxis={true}
                                    fixLabelOverlap={true}
                                    axisLabelComponent={<VictoryLabel />}
                                    style={{
                                    grid: { stroke: "grey",strokeWidth:0.5 },
                                    tickLabels: {
                                        fontSize: 20,
                                      }
                                    }}
                            />
                             <VictoryAxis tickFormat={(x) => x}/>
                            <VictoryLine style={{
                                data: { stroke: "black" , strokeWidth:5 },parent: { border: "1px solid #ccc"}
                                }}
                                
                                labels={({ datum }) => ``}
                                labelComponent={
                                <VictoryTooltip
                                    flyoutComponent={<CustomFlyout />}
                                />}
                                data={[
                                { x: "1/2", y: 100  },
                                { x: "2/2", y: 150     },
                                { x: "3/2", y: 500 },
                                { x: "4/2", y: 80 },
                                { x: "5/2", y: 90 }
                                ]}/>
                                
                        </VictoryChart>
                </div>
            </Paper>
        </Grid>
    )
}

export default TemplateBoxChart