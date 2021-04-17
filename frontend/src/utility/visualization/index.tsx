import React from 'react';
import Scoreline from './scoreline/Scoreline';
import Line from './line/Line';
import Score from './score/Score'
import MultiScore from './multiscore/MultiScore';
interface visualizationI {
    chartProps: any,
    name: string,
    display ?: Array<string>
}

const  Visualization :React.FC<visualizationI>  = ({chartProps,name,display}) => {
  let sizeNumber = 0;
  console.log(chartProps+'really empty?')
    const chart : any = {
      'cardLine': <Scoreline chartData={chartProps} />,
      'timeSeries': <Line  chartData={chartProps} />,
      'summaryCard': <Score chartData={chartProps} />,
      'multiSummaryCard':<MultiScore chartData={chartProps} display={display}/>
     // 'normalTable':
    //  'multiSummaryCard'
  };

   return (
      <>
        {chart[name]}
      </>
      );
}

export default React.memo(Visualization);