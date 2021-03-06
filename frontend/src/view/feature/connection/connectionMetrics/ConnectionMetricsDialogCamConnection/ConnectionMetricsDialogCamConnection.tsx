import React , {useEffect,useContext} from 'react';
import DialogCom from '../../../../../utility/dialog/DialogCom';
import ConnectionMetricsDialogCamConnectionTitle from './ConnectionMetricsDialogCamConnectionTitle';
import ConnectionMetricsDialogCamConnectionContent from './ConnectionMetricsDialogCamConnectionContent';
import {windowpopClose,windowpopStatus,windowpopOpen} from '../../../../../windowpop/windowpop'
import {CONNECTION_SERVICE_SUCCESSFUL} from '../redux/ConnectionMetricsConstant';
import {useDispatch,useSelector  } from 'react-redux';
import {RootState} from './../../../../../reducer';
import {PAGE_STATUS_ERROR} from '../../../../modal/Loadingpage/redux/LoadingConstant'
import {FetchContext} from '../../../../../context/FetchContext';

declare const window: any;
interface Cam {
    platformid:string,
    sid: string,
    onhandleRecall:()=>void,
    myWindow: any;
    servicename:string,
    imglocation:string,
    direct_url_component: string,
    open: boolean,
    onClose : ()=>void,
}


const ConnectionMetricsDialogCamConnection: React.FC<Cam>= ({platformid,sid,onhandleRecall,myWindow,servicename,imglocation,open,onClose,direct_url_component}) => {
    const MetricsDetail = useSelector((state:RootState)=>state.metrics);
    const dispatch = useDispatch();
    const {authAxios} = useContext(FetchContext);

    //'http://localhost:3000/auth/app/complete/success?aid=Mailchimp&uid=1'
    //User can click the button to trigger a popup window to connect to their application.
    const onhandleWindowpopOpen = () => {
        myWindow = windowpopOpen(myWindow,`${direct_url_component}id=${sid}`);
        window.DispatchService = (aid: string , uid : string) => {
            const serviceConnection = async() => {
                try{
                    if(aid !== MetricsDetail.app){
                        throw "There is something wrong, Please try again."
                    }
                    const {data} = await authAxios.post(`platform/${platformid}/myconnection/apid/`,{
                        "apid": uid
                    })
                    data.Check && dispatch({type:CONNECTION_SERVICE_SUCCESSFUL,payload:{service:uid}})
                    setTimeout(()=>windowpopClose(myWindow),4000);                   
                }catch(error){
                    const payload = {message: error.message || error,
                        explaination: ''}
                    dispatch({type:PAGE_STATUS_ERROR, payload: payload});
                }
            }
            serviceConnection()
        }
    }

    const onWindowClose = () => {
        windowpopClose(myWindow);
        onClose();
        
    }

    const size = {
        width: true,
    }

    const data = {
        title: <ConnectionMetricsDialogCamConnectionTitle servicename={servicename}/>,
        content: <ConnectionMetricsDialogCamConnectionContent onhandleRecall={onhandleRecall} onWindowClose={onWindowClose} windowpopOpen={onhandleWindowpopOpen} servicename={servicename} imglocation={imglocation} direct_url_component={direct_url_component}/>,
        action: <> </>
    }

    const dialogStatus = {
        open : open ,
        onClose : onWindowClose
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
