import React , {useState} from 'react';
import DialogCom from './../../../utility/dialog/DialogCom';
import {ErrorpageContent} from './ErrorpageContent';
import {ErrorpageAction} from './ErrorpageAction';
import {ErrorpageTitle} from './ErrorpageTitle';

interface ErrorpageInterface {
    message:string
}

const Errorpage: React.FC<ErrorpageInterface>= (props) => {
    const [open,setOpen] = useState(true);
    const onClose = () => {
        setOpen(false);
    }
    const error = {
        message: 'There is an error occured while signing up.',
        code: '',
        explaination: props.message
    }

    const data = {
        title: <ErrorpageTitle />,
        content: <ErrorpageContent error={error}/>,
        action: <ErrorpageAction />
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

export default  Errorpage
