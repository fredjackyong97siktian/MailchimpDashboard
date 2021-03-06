import React from 'react';
import {GrLinkedin} from 'react-icons/gr';
import { IconContext } from "react-icons";
import {iconSize} from './index';

export const LinkedIn :React.FC<iconSize> = ({sizeNumber}) => {

    return(
        <IconContext.Provider value={{ color: "#0077B5", className: "global-class-name" }}>
            <div>
                <GrLinkedin size={50}/>
            </div>
        </IconContext.Provider>
    )
}