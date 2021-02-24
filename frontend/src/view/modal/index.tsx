import React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from './../../reducer';
import LoadingPage from './../modal/Loadingpage/LoadingPage';
import Errorpage from './../modal/Errorpage/Errorpage';
import Successpage from './../modal/Successpage/Successpage';

interface ELSI{
    success ?: {
        title:string,
        explaination:string,
        url:string,
        buttontitle:string
    }
}

export const ELS : React.FC<ELSI> = ({success}) => {
    const status = useSelector((state:RootState)=>state.loading);
    
    return(
        <>
      {status.loading ? <LoadingPage /> : <></>}
      {status.hasError ? <Errorpage message={status.message} explaination={status.explaination}/> : <> </>} 
      {status.hasSuccess && success ? <Successpage success={success} /> : <> </> }
        </>
    )
}