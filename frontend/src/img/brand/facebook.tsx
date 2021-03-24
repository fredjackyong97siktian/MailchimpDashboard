import React from 'react';
import {GrFacebook} from 'react-icons/gr';
import { IconContext } from "react-icons";
import {iconSize} from './index';

export const Facebook :React.FC<iconSize> = ({sizeNumber}) => {

    return(
        <IconContext.Provider value={{ color: "#3B5998", className: "global-class-name" }}>
            <div>
                <GrFacebook size={sizeNumber}/>
            </div>
        </IconContext.Provider>
    )
}