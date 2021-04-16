import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import clsx from 'clsx';
import {ScoreChart} from './ScoreChart';
import {ScorelineI} from '../line/LineChart';
//to have customized classes
const Score : React.FC<ScorelineI> = ({chartData}) => {
    const classes = useStyles();
    return(
        <>
            <ScoreChart chartData={chartData}/>
        </>
    )
}

export default Score