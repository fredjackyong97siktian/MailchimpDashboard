import React ,{useEffect,useState}from 'react';
import Loading from '../../../utility/loading/Loading';
import ModalCom from  '../../../utility/modal/ModalCom';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_ERROR} from '../../modal/Loadingpage/redux/LoadingConstant'
const LoadingPage: React.FC= () => {
    const dispatch = useDispatch();
    const message = "Processing...";
    useEffect(()=>{
        //this is used to ensure if the thing process too long, it will mark as error.
        const timer = setTimeout(() => {
            dispatch({type:PAGE_STATUS_ERROR, payload: 
                {message: 'Run Time Error',
                explaination: ''}});
          }, 60000);
          return () => clearTimeout(timer);
    },[])

    return (
        <div> 
        <ModalCom component={<Loading message={message}/>}/>
        </div>
    );
}

export default  LoadingPage
