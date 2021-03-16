import React ,{useEffect} from 'react';
import WrapperApp from './WrapperApp';
import { useParams } from "react-router";
import ApplicationStatusF from './AppilcationStatusF';
import ApplicationStatusS from './ApplicationStatusS';
interface Params {
    status: string,
}

const ApplicationStatus :React.FC = () => {
    const {status }  = useParams<Params>();
    let div;
    console.log('ha')
    console.log(status)
    status === 'success'  ? div = <ApplicationStatusS /> : div = <ApplicationStatusF />

    return(      
    <WrapperApp app={<>{div}</>} />
    )
}

export default ApplicationStatus