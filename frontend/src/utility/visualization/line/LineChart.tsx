import React from 'react';
import { VictoryLine ,VictoryTooltip ,VictoryChart,VictoryVoronoiContainer,VictoryContainer,VictoryArea, VictoryAxis,VictoryLabel, VictoryScatter} from 'victory';
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
    stroke: "transparent",
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
  //const uniqueArray = (a :any) => [...new Set(a.map((o :any) => JSON.stringify(o)))].map((s:any) => JSON.parse(s))
export const LineChart : React.FC<ScorelineI> = ({chartData}) => {
    /*Remove Duplication */
    if(chartData){
      //coverting string to date
      for (let i=0;i<chartData.length; i++){
        (!(chartData[i].x instanceof Date)) && (chartData[i].x = new Date(chartData[i].x))
        chartData[i].x = new Date((chartData[i].x).setHours(0,0,0,0))
      }
      //sort the date
      const util = require('util')
      chartData.sort((a ,b)=>{return Math.abs(new Date(b.x).getDate() - new Date(a.x).getDate())})
      console.log('hahahahhahahahahaha')
      console.log(util.inspect(chartData, {showHidden: false, depth: null}))
      //chartData = uniqueArray(chartData)
      //remove duplicate if any (must get the latest) (Based on date in future)
      //console.log('Nopiakc'+chartData)
      //console.log(util.inspect(chartData, {showHidden: false, depth: null}))
    }
    let Scattersize;
    //chartData.length === 1 ? Scattersize = 5 : Scattersize = 5;
    //console.log(`length ${chartData.length}`)

    const [minY,maxY] = findMinMaxY(chartData)
    const [minDate,maxDate]= findMinMaxDate(chartData) 
    console.log(minY + maxY)
    return(
        <VictoryChart 
                    scale={{ x: "time" }}
                    domain={{ x:[minDate,maxDate],y: [minY,maxY] }}
                    height={300}
                    width={400}
                    theme={ chartTheme }
                    containerComponent={
                        <VictoryVoronoiContainer/>
                    }
                    >
                      <VictoryScatter
                        style={{ data: { fill: "green" } }}
                        size={Scattersize}
                        data={chartData}
                      />

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
                     <VictoryAxis tickFormat={(x) => `${x.getDate()}/${x.getMonth()}`} 
                           style={{
                            tickLabels: {
    
                              }
                            }}/>

                    <VictoryLine style={{
                        data: { stroke: "green" , strokeWidth:5 },parent: { border: "1px solid #ccc"}
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
