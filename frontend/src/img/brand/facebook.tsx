import React from 'react';
import {GrFacebook} from 'react-icons/gr';
import { IconContext } from "react-icons";

export const Facebook :React.FC = () => {

    return(
        <IconContext.Provider value={{ color: "#3B5998", className: "global-class-name" }}>
            <div>
                <GrFacebook size={50}/>
            </div>
        </IconContext.Provider>
    )
}