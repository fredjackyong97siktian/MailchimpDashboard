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
                console.log('checking checking');
                axios.defaults.headers.post['Content-Type'] ='application/json';
                //console.log(`https://accounts.zoho${domain}/oauth/v2/token?grant_type=authorization_code&client_id=${param.client_id}&client_secret=${param.client_secret}&redirect_uri=${param.redirect_uri}&code=${param.code}`)
                const data = await axios.post(`https://accounts.zoho.com/oauth/v2/token?grant_type=authorization_code&client_id=1000.NVBOOVBKCSHSNCLEKR7FC5V4TQIUCL&client_secret=ac07b1a5b92e9685c08c8c5c1b69c5eaedea1e2e3a&redirect_uri=http://localhost:3000/&code=1000.ce9dce80365710c96eada488c2d11a52.e0a66d7c29290a339c49552fdbc20c1d`
                );
                //save the access token into the firebase
                console.log('checking 123');
                //alert(data);
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