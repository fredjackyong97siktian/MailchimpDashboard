import React from 'react';
import Scoreline from './scoreline/Scoreline';
import Line from './line/Line';
import Score from './score/Score'

interface visualizationI {
    chartProps: any,
    name: string,
}

const  Visualization :React.FC<visualizationI>  = ({chartProps,name}) => {
  let sizeNumber = 0;

    const chart : any = {
      'cardLine': <Scoreline {...chartProps} />,
      'timeSeries': <Line  {...chartProps} />,
      'summaryCard': <Score {...chartProps} />,
     // 'normalTable':
    //  'multiSummaryCard'
  };

   return (
      <>
        {chart[name]}
      </>
      );
}

export default Visualization;