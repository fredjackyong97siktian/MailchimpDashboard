import React from 'react';
import { VictoryLine ,VictoryTooltip ,VictoryChart,VictoryVoronoiContainer,VictoryContainer,VictoryArea, VictoryAxis,VictoryLabel, VictoryScatter} from 'victory';
import {LineFlyout,sansSerif} from './LineFlyout';
import {findMinMaxY, findMinMaxDate} from './../template/TemplateMinMax';
import {filterDateArray} from './../template/TemplateDate';

interface XYaxisI{
    x: any,
    y:number
}

export interface ScorelineI {
    chartData : Array<XYaxisI>,
    display ?: Array<string>
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
  

export const LineChart : React.FC<ScorelineI> = ({chartData}) => {
    /*Remove Duplication */
    let Scattersize;
    let XlabelStyle : 'transparent' | 'black'  = 'black';
    let XlabelLabel : 'transparent' | 'grey'  = 'transparent'; 
    if(chartData && chartData.length !==0){
      //coverting string to date
      const chartDataLength = chartData.length;
      for (let i=0;i<chartDataLength; i++){
        (!(chartData[i].x instanceof Date)) && (chartData[i].x = new Date(chartData[i].x))
        chartData[i].x = new Date((chartData[i].x).setHours(0,0,0,0))
      }
      //sort the date
      const util = require('util')
      chartData.sort((a ,b)=>{return Math.abs(new Date(b.x).getDate() - new Date(a.x).getDate())})
      console.log('hahahahhahahahahaha')
      console.log(util.inspect(chartData, {showHidden: false, depth: null}))

      //remove duplicate if any (must get the latest) (Based on date/month/year in future)
      chartData = filterDateArray(chartData)

      chartData.length === 1 ? Scattersize = 5 : Scattersize = 0;
    }else{
      XlabelStyle = 'transparent'
      XlabelLabel =  'grey';
    }

    //console.log(`length ${chartData.length}`)

    const [minY,maxY] = findMinMaxY(chartData)
    const [minDate,maxDate]= findMinMaxDate(chartData) 
    //console.log(minY + maxY)
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
                      <VictoryLabel text="No Data" x={200} y={150} textAnchor="middle" style={{ fill: XlabelLabel ,fontSize: 25 }}/>
                      <VictoryScatter
                        style={{ data: { fill: "green" } }}
                        size={Scattersize}
                        data={chartData}
                        labels={({ datum }) => ``}
                        labelComponent={
                          <VictoryTooltip
                              flyoutComponent={<LineFlyout />}
                          />}
                      />

                    <VictoryAxis     
                            dependentAxis={true}
                            fixLabelOverlap={true}
                            axisLabelComponent={<VictoryLabel />}
                            style={{
                            grid: { stroke: XlabelStyle ,strokeWidth:0.5 },
                            tickLabels: {
                                fontSize: 20,
                                fill:XlabelStyle,
                              }
                            }}
                    />
                     <VictoryAxis tickFormat={(x) => `${x.getDate()}/${x.getMonth()}`} 
                           style={{
                            tickLabels: {
                                fill:XlabelStyle
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
