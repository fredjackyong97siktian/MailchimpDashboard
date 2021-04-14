import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import {ScorelineI} from './../line/LineChart';
import Line from './../line/Line';
import Score from './../score/Score';
export const Scoreline : React.FC<ScorelineI> = ({chartData}) => {
    const classes = useStyles();
 
    return(
        <>
          <div className={classes.Line_body}>
            <Score />
          </div>
          <div className={classes.Scoreline_body} >
            <Line chartData={chartData} />
          </div>
        </>
    )
}

export default Scoreline;