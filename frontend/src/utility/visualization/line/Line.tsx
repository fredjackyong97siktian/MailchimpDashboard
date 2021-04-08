import React from 'react';
import {LineChart,ScorelineI} from './LineChart';
import {useStyles} from './../template/TemplateBox-style';
const Line : React.FC<ScorelineI> = ({chartData}) => {
    const classes = useStyles();
    return(
        <>
            <LineChart chartData={chartData}/>
        </>
    )
}

export default Line