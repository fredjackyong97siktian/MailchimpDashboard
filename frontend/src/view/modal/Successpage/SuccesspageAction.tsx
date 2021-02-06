import React from 'react'
import { Grid , Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_RECOVER} from './../Loadingpage/redux/LoadingConstant'
import {SuccessAction} from './Successpage-interface';
import { useHistory } from "react-router-dom";

export const SuccesspageAction : React.FC<SuccessAction> = (props) => {
   const dispatch = useDispatch();
   let history = useHistory();
    const toCancel = () => {
      dispatch({type:PAGE_STATUS_RECOVER})
      history.push(props.url);      
    }

    return (
    <>
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    > 
        <Button variant="contained" style={{backgroundColor:green[800], width:'100%'}} onClick={toCancel} disableElevation >
            <Typography style={{color:'white'}}> {props.buttontitle} </Typography>
        </Button> 
    </Grid>
    </>
    );
}
