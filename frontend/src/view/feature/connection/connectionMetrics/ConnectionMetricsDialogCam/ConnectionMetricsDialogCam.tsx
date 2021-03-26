import React , {useState,MouseEvent} from 'react';
import DialogCom from '../../../../../utility/dialog/DialogCom';
import ConnectionMetricsDialogCamTitle from './ConnectionMetricsDialogCamTitle';
import ConnectionMetricsDialogCamContent from './ConnectionMetricsDialogCamContent';
import ConnectionMetricsDialogCamAction from './ConnectionMetricsDialogCamAction';

interface metricsDetail {
    metrics: string,
    detail: string
}

interface Cam {
    servicename:string,
    detail: metricsDetail,
    open: boolean,
    onClose : ()=>void
}

const ConnectionMetricsDialogCam: React.FC<Cam>= ({servicename,open,onClose, detail}) => {

    const size = {
        width: true,
    }

    const data = {
        title: <ConnectionMetricsDialogCamTitle name={servicename} />,
        content: <ConnectionMetricsDialogCamContent metrics={detail.metrics} detail={detail.detail}/>,
        action: <ConnectionMetricsDialogCamAction/>
    }

    const dialogStatus = {
        open : open ,
        onClose : onClose
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

export default  ConnectionMetricsDialogCam
