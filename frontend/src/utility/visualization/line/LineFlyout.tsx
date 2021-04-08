import React from 'react';
import {TemplateMonth , TemplateDay} from './../template/TemplateDate';

export const sansSerif = "'Gill Sans', 'Seravek', 'Trebuchet MS', sans-serif";

export const LineFlyout :React.FC = ({x , y ,datum}:any)=>{
    const newY = y - 100;
    const newX = x - 50
    const Date = datum.x
return(
    <>
      <g>
        <circle cx={x} cy={y} r="5" stroke="black" height="50" width="100" strokeWidth="3" fill="white"/>
        <rect x={newX} y={newY} height="80" width="200" fill="white" stroke="black"/>
        <text x={newX+8} y={newY+20} font-family={sansSerif} font-size="17" fill="black">
          {`${TemplateDay(Date.getDay())}, ${TemplateMonth(Date.getMonth())} ${Date.getDate()}, ${Date.getFullYear()}`}
        </text>
        <text x={newX+8} y={newY+70} font-family={sansSerif} font-size="40" fill="black">{datum.y}</text>
      </g>
    </>
)
}