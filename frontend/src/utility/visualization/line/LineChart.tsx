import React from 'react';
import { VictoryLine ,VictoryTooltip ,VictoryChart,VictoryVoronoiContainer,VictoryContainer,VictoryArea, VictoryAxis ,VictoryLabel} from 'victory';
import {LineFlyout,sansSerif} from './LineFlyout';
import {findMinMaxY, findMinMaxDate} from './../template/TemplateMinMax';

interface XYaxisI{
    x: any,
    y:number
}

export interface ScorelineI {
    chartData : Array<XYaxisI>,
}

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

export const LineChart : React.FC<ScorelineI> = ({chartData}) => {
    const [minY,maxY] = findMinMaxY(chartData)
    const [minDate,maxDate]= findMinMaxDate(chartData) 
    return(
        <VictoryChart 
        scale={{ x: "time" }}
                    domain={{ x:[minDate,maxDate],y: [minY-30,maxY+30] }}
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
                     <VictoryAxis tickFormat={(x) => `${x.getDate()}/${x.getMonth()}`}/>
                    <VictoryLine style={{
                        data: { stroke: "black" , strokeWidth:5 },parent: { border: "1px solid #ccc"}
                        }}
                        
                        labels={({ datum }) => ``}
                        labelComponent={
                        <VictoryTooltip
                            flyoutComponent={<LineFlyout />}
                        />}
                        data={chartData}/>
                </VictoryChart>
    )
}
