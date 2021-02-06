import React , {useState} from 'react';
import DialogCom from './../../../utility/dialog/DialogCom';
import {SuccesspageContent} from './SuccesspageContent';
import {SuccesspageAction} from './SuccesspageAction';
import {SuccesspageTitle} from './SuccesspageTitle';
import {SuccessMessage} from './Successpage-interface';

const Successpage: React.FC<SuccessMessage>= (props) => {
    const [open,setOpen] = useState(true);
    const onClose = () => {
        setOpen(false);
    }
    const success = {
        title: props.success.title,
        explaination: props.success.explaination 
    }

    const data = {
        title: <SuccesspageTitle />,
        content: <SuccesspageContent success={success}/>,
        action: <SuccesspageAction url={props.success.url} buttontitle={props.success.buttontitle}/>
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

export default  Successpage
