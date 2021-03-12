import React from 'react';
import ZohoPeopleForm from './ZohoPeopleForm';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStylesForm from '../../../utility/form/Form-style';
import WrapperApp from './../../WrapperApp';

const ZohoPeople :React.FC = () => {
    const classes = useStylesForm();
    return(      
        <WrapperApp app={<ZohoPeopleForm />} />
    )
}

export default ZohoPeople