import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import clsx from 'clsx';
import {ScoreChart} from './ScoreChart';

//to have customized classes
const Score : React.FC = () => {
    const classes = useStyles();
    return(
        <>
            <ScoreChart />
        </>
    )
}

export default Score