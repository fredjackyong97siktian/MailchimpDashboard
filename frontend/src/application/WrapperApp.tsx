import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStylesForm from '../utility/form/Form-style';
import {ELS} from '../view/modal/index';

interface WrapperAppI {
    app : React.ReactNode
}
// Will Put Logo inside
const WrapperApp :React.FC<WrapperAppI> = ({app}) => {
    const classes = useStylesForm();
    return(
        <>
        <ELS />
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            
            <div className={classes.paper}>
                {app}
            </div>
        </Container>
        </>
    )
}

export default WrapperApp