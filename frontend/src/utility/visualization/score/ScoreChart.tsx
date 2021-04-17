import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import RemoveIcon from '@material-ui/icons/Remove';
import {ScorelineI} from '../line/LineChart';
export const ScoreChart : React.FC<ScorelineI> = ({chartData}) => {
    const classes = useStyles();
    let number : number | string = 0;
    let percent : number = 0;
    let amount : number = 0;
    let sign : string = '';
    let color  = {'red': false , 'grey':true,'green':false};
    let arrow = <RemoveIcon className={clsx(classes.icon)}/>

    if(chartData && chartData.length !== 0){
      const chartDataLength = chartData.length;
      //number
      chartDataLength > 0  ? number = chartData[chartDataLength-1].y : number = chartData[1].y
      //percent
      chartDataLength > 0 && chartDataLength > 1 && chartData[chartDataLength-1].y !== 0 ? percent = (((chartData[chartDataLength-1].y)-(chartData[chartDataLength-2].y))/chartData[chartDataLength-2].y) * 100 : percent = 0
      //amount
      chartDataLength > 0 && chartDataLength > 1 ? amount = (chartData[chartDataLength-1].y)-(chartData[chartDataLength-2].y) : amount = 0
      //color and sign
      if (amount > 0){
        sign = '+'
        color.green = true
        color.grey = false;
        arrow = <ArrowDropUpIcon className={clsx(classes.icon)}/>
      }else if(amount < 0){
        sign = ''
        color.red = true
        color.grey = false;
        arrow = <ArrowDropDownIcon className={clsx(classes.icon)}/>
      }
    }else{
      number = '-';
    }

    return(
        <>
            <span className={classes.figure}>
              {number} <span className={classes.figureUnit}>  </span>
            </span>
            <div className={clsx(classes.figurePercent,color.green && classes.green, color.red && classes.red, color.grey &&classes.grey)}>
              <span >{arrow}</span>
              <span >{percent}% ({sign}{amount})</span>
            </div>
        </>
    )
}