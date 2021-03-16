import React ,{useEffect} from 'react';
import ZohoPeopleForm from './ZohoPeopleForm';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStylesForm from '../../../utility/form/Form-style';
import WrapperApp from '../../WrapperApp';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../view/modal/Loadingpage/redux/LoadingConstant'
import { useParams } from "react-router";
import axios from 'axios';
interface Params {
    domain: string,
    granttype: string,
}

const config = require('../../../config');

const ZohoPeopleStatus :React.FC = () => {

    const classes = useStylesForm();
    const {granttype , domain }  = useParams<Params>();
    const dispatch = useDispatch();
    const param = {
        grant_type : "authorization_code",
        client_id : config.ZOHO.CLIENT_ID,
        client_secret: config.ZOHO.CLIENT_SECRET,
        redirect_uri : config.ZOHO.REDIRECT_URL,
        code : granttype
    }

    useEffect(()=>{
        dispatch({type:PAGE_STATUS_LOADING});
        const status = async()=> {
            try{

                dispatch({type:PAGE_STATUS_SUCCESS});
            }catch(error){
                const payload = {message: error.message || error,
                    explaination: ''}
                    dispatch({type:PAGE_STATUS_ERROR, payload: payload});
            }
        }
        status();
    },[])
    return(      
        <WrapperApp app={<></>} />
    )
}

export default ZohoPeopleStatus