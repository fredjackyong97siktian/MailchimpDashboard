import React from 'react';
import {TemplateMonth , TemplateDay} from './../template/TemplateDate';

export const sansSerif = "'Gill Sans', 'Seravek', 'Trebuchet MS', sans-serif";

export const LineFlyout :React.FC = ({x , y ,datum}:any)=>{
    const newY = y - 100;
    const newX = x - 50
    const date = new Date(datum.x)

return(
    <>
      <g>
        <circle cx={x} cy={y} r="5" stroke="black" height="50" width="100" strokeWidth="3" fill="white"/>
        <rect x={newX} y={newY} height="80" width="200" fill="white" stroke="black"/>
        <text x={newX+8} y={newY+20} fontFamily={sansSerif} fontSize="17" fill="black">
        {`${TemplateDay(date.getDay())}, ${TemplateMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`}
        </text>
        <text x={newX+8} y={newY+70} fontFamily={sansSerif} fontSize="40" fill="black">{datum.y}</text>
      </g>
    </>
)
}