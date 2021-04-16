import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import {ScorelineI} from './../line/LineChart';
import Line from './../line/Line';
import Score from './../score/Score';
export const Scoreline : React.FC<ScorelineI> = ({chartData}) => {
    const classes = useStyles();
    console.log(chartData)
    return(
        <>
          <div className={classes.Line_body}>
            <Score chartData={chartData}/>
          </div>
          <div className={classes.Scoreline_body} >
            <Line chartData={chartData} />
          </div>
        </>
    )
}

export default Scoreline;