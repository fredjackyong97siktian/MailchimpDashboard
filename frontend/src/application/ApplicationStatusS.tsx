import React ,{useEffect} from 'react';
import {windowpopClose, windowpopStatus ,windowpopOpen} from '../windowpop/windowpop';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStylesForm from '../utility/form/Form-style';
import WrapperApp from './WrapperApp';
import { useParams } from "react-router";

const ApplicationStatusS :React.FC = () => {
    return(   
    <Grid container spacing={3} direction="column" justify="center" alignItems="center">
        <Grid item xs>
            Connect Successfully
        </Grid>
        <Grid item xs>
            <Button variant="contained" style={{backgroundColor:green[800], width:'100%'}} onClick={windowpopClose}> Ok </Button>
        </Grid>    
    </Grid>
    )
}

export default ApplicationStatusS