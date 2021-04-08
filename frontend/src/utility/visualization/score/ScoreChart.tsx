import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
export const ScoreChart : React.FC = () => {
    const classes = useStyles();
    return(
        <>
            <span className={classes.figure}>
              230 <span className={classes.figureUnit}> c/p </span>
            </span>
            <div className={clsx(classes.figurePercent,classes.green)}>
              <span ><ArrowDropUpIcon className={clsx(classes.icon)}/> </span>
              <span >23% (+2450)</span>
            </div>
        </>
    )
}