import React , {useState,MouseEvent} from 'react';
import DialogCom from '../../../../../utility/dialog/DialogCom';
import ConnectionMetricsDialogCamConnectionTitle from './ConnectionMetricsDialogCamConnectionTitle';
import ConnectionMetricsDialogCamConnectionContent from './ConnectionMetricsDialogCamConnectionContent';
import {windowpopClose,windowpopStatus,windowpopOpen} from '../../../../../windowpop/windowpop'

interface Cam {
    myWindow: any;
    servicename:string,
    imglocation:string,
    direct_url_component: string,
    open: boolean,
    onClose : ()=>void,
}


const ConnectionMetricsDialogCamConnection: React.FC<Cam>= ({myWindow,servicename,imglocation,open,onClose,direct_url_component}) => {
    const onhandleWindowpopOpen = () => {
        myWindow = windowpopOpen(myWindow,'http://localhost:3000/auth/app/complete/success');
    }

    const size = {
        width: true,
    }

    const data = {
        title: <ConnectionMetricsDialogCamConnectionTitle servicename={servicename}/>,
        content: <ConnectionMetricsDialogCamConnectionContent windowpopOpen={onhandleWindowpopOpen} servicename={servicename} imglocation={imglocation} direct_url_component={direct_url_component}/>,
        action: <> </>
    }
    const onWindow = () => {
        windowpopClose(myWindow);
        onClose();
        
    }
    const dialogStatus = {
        open : open ,
        onClose : onWindow
    }

    const dialogSetting = {
        onCloseSet : true
    }
    return (
        <div> 
            <DialogCom data={data} dialogStatus={dialogStatus} dialogSetting = {dialogSetting} size={size}/>
        </div>
    );
}

export default  ConnectionMetricsDialogCamConnection
