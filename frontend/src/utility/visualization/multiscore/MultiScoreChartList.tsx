import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import RemoveIcon from '@material-ui/icons/Remove';
import {ScorelineI} from '../line/LineChart';

interface MultiScoreChartListI {
    display : string,
    number : number | string,
    percent : number,
    amount : number,
    sign : string
}

export const MultiScoreChartList : React.FC<MultiScoreChartListI> = ({display,number,percent,amount ,sign}) => {
    const classes = useStyles();
    let color  = {'red': false , 'grey':false,'green':false};
    let arrow;
    if(number>0){
        color.green = true
        arrow = <ArrowDropUpIcon />
    }else if(number <0){
        color.red = true
        arrow = <ArrowDropDownIcon />
    }else{
        color.grey = true
        arrow = <RemoveIcon />
    }
    /*let sign : string = '';
    let color  = {'red': false , 'grey':false,'green':false};
    let arrow = <RemoveIcon className={clsx(classes.icon)}/>

    if(percent > 0){
        color.green = true
    }else if (percent === 0){
        color.grey = true
    }else{
        color.red = true
    }*/

    /*            <div className={clsx(classes.figurePercent,color.green && classes.green, color.red && classes.red, color.grey &&classes.grey)}>
              <span >{arrow}</span>
              <span >{percent}% ({sign}{amount})</span>
            </div> */
    return(
        <>
            <div className={classes.multiFigure}>
                {display}: {number} <span className={classes.figureUnit}>  </span>
            </div>
            <div className={clsx(classes.figurePercent)}>
                <span >{arrow}</span>
              <span >{percent}% ({sign}{amount})</span>
            </div>
        </>
    )
}