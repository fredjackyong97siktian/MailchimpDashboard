import React , {useState} from 'react';
import DialogCom from '../../../../../utility/dialog/DialogCom';
import ConnectionMetricsDialogCamTitle from './ConnectionMetricsDialogCamTitle';
import ConnectionMetricsDialogCamContent from './ConnectionMetricsDialogCamContent';
import ConnectionMetricsDialogCamAction from './ConnectionMetricsDialogCamAction';

const ConnectionMetricsDialogCam: React.FC= (props) => {
    const [open,setOpen] = useState(true);
    const onClose = () => {
        setOpen(false);
    }

    const data = {
        title: <ConnectionMetricsDialogCamTitle />,
        content: <ConnectionMetricsDialogCamContent />,
        action: <ConnectionMetricsDialogCamAction/>
    }

    const dialogStatus = {
        open : open ,
        onClose : onClose
    }

    const dialogSetting = {
        onCloseSet : false
    }
    return (
        <div> 
        <DialogCom data={data} dialogStatus={dialogStatus} dialogSetting = {dialogSetting}/>
        </div>
    );
}

export default  ConnectionMetricsDialogCam
