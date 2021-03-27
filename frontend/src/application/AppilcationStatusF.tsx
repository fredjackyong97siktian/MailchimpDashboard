import React ,{useEffect} from 'react';
//import {windowpopClose} from '../windowpop/windowpop';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStylesForm from '../utility/form/Form-style';
import WrapperApp from './WrapperApp';
import { useParams } from "react-router";
const windowpopClose = () => {
    if(window){
        window.close();
    }  
}
const ApplicationStatusF :React.FC = () => {
    return(   
    <Grid container spacing={3} direction="column" justify="center" alignItems="center">
        <Grid item xs>
            Unable To Connect
        </Grid>
        <Grid item xs>
            Please Try Again Later.
        </Grid>
        <Grid item xs>
            If it is still unsolved, please contact us.
        </Grid>
        <Grid item xs>
            <Button variant="contained" style={{backgroundColor:red[800], width:'100%'}} onClick={windowpopClose}> Close </Button>
        </Grid>        
    </Grid>
    )
}

export default ApplicationStatusF