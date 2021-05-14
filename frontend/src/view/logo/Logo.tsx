import React, { ReactDOM ,useEffect, useState ,useContext} from 'react';
import clsx from 'clsx';
import useStyles from './Logo-style'; 
import { IconButton } from '@material-ui/core';
import config from './../../config';
//<LinearProgress />
const Logo : React.FC = () => {
    const classes = useStyles();
    const handleClick = () =>{
        window.location.replace(String(config.API_CLIENT));
    }
   return(
     <>
    <IconButton className={classes.logo} onClick={handleClick}>
        BSUPKIT
    </IconButton>
    </>
   ); 
}

export default Logo