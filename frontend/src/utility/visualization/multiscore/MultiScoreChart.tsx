import React from 'react';
import {useStyles} from './../template/TemplateBox-style';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import RemoveIcon from '@material-ui/icons/Remove';
import {MultiScoreChartList} from './MultiScoreChartList';
import {ScorelineI} from '../line/LineChart';
interface MultiScoreI {
  chartData : any,
  display: any
}

export const MultiScoreChart : React.FC<MultiScoreI> = ({chartData,display}) => {
    const classes = useStyles();
    let number : number | string = 0;
    let percent : number = 0;
    let amount : number = 0;
    let sign : string = '';
    let color  = {'red': false , 'grey':true,'green':false};
    let arrow = <RemoveIcon className={clsx(classes.icon)}/>
    let list;
    console.log('hahahaha' + chartData)
    if(display && display.length > 0){
      let chartLength : number;
      (chartData.length) && chartData ? chartLength = chartData.length : chartLength = 0

      list = (display).map((item :any)=>{
        let dataNumber;
        let percent;
        let amount;
        let sign = '';
        let chartDataReturnData = chartData;
        console.log(chartData.length + ' dont laught')
        if(chartData.length === 0 || !chartDataReturnData[chartLength-1][item]){
          return <MultiScoreChartList display={item} number='-'  percent={0}  amount={0}  sign='' />
        }
        chartDataReturnData[chartLength-1][item] ? dataNumber = chartDataReturnData[chartLength-1][item] : dataNumber = "-"
        chartDataReturnData[chartLength-1][item] && chartLength > 1 && chartDataReturnData[chartLength-1][item] !== 0 ?  percent = ((chartDataReturnData[chartLength-1][item])-(chartDataReturnData[chartLength-2][item]))/(chartDataReturnData[chartLength-2][item]) * 100 : percent = 0;
        chartDataReturnData[chartLength-1][item] && chartLength > 1 ? amount = (chartDataReturnData[chartLength-1][item])-(chartDataReturnData[chartLength-2][item]) : amount = 0;
        if(dataNumber > 0) sign = "+";
        return <MultiScoreChartList display={item} number={dataNumber}  percent={percent}  amount={amount}  sign={sign} />
      }) 
    }

    /*if(chartData && chartData.length !== 0){
      const chartDataLength = chartData.length;
      //number
      chartDataLength > 0  ? number = chartData[chartDataLength-1].y : number = chartData[1].y
      //percent
      chartDataLength > 1 && chartData[chartDataLength-1].y !== 0 ? percent = (((chartData[chartDataLength-1].y)-(chartData[chartDataLength-2].y))/chartData[chartDataLength-2].y) * 100 : percent = 0
      //amount
      chartDataLength > 1 ? amount = (chartData[chartDataLength-1].y)-(chartData[chartDataLength-2].y) : amount = 0
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
    } */

    return(
        <>
          {list}
        </>
    )
}