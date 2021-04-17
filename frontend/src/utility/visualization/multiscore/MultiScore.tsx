import React from 'react';
import {useStyles} from '../template/TemplateBox-style';
import clsx from 'clsx';
import {MultiScoreChart} from './MultiScoreChart';
import {ScorelineI} from '../line/LineChart';
//to have customized classes
const Score : React.FC<ScorelineI> = ({chartData,display}) => {
    const classes = useStyles();
    console.log('hahahaha' + chartData)
    return(
        <div >
            <MultiScoreChart chartData={chartData} display={display}/>
        </div>
    )
}

export default Score