import React from 'react'
import { Grid } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_RECOVER} from './../Loadingpage/redux/LoadingConstant'
export const ErrorpageAction : React.FC = () => {
   const dispatch = useDispatch();
    const toCancel = () => {
      dispatch({type:PAGE_STATUS_RECOVER})
    }

    return (
    <>
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    > 
        <Button variant="contained" style={{backgroundColor:red[500], width:'100%'}} onClick={toCancel} disableElevation >
            <ClearIcon style={{fill:"white"}}/> 
        </Button> 
    </Grid>
    </>
    );
}
