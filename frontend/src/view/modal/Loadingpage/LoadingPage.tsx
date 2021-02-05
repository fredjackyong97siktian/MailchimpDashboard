import React from 'react';
import Loading from '../../../utility/loading/Loading';
import ModalCom from  '../../../utility/modal/ModalCom';

const LoadingPage: React.FC= () => {
    const message = "Processing...";

    return (
        <div> 
        <ModalCom component={<Loading message={message}/>}/>
        </div>
    );
}

export default  LoadingPage
