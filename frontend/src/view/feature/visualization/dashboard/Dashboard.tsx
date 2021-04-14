import React,{useEffect,useState,useContext} from 'react';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {DashboardSection} from './DashboardSection';
import {useHistory , useParams, useLocation} from 'react-router-dom'
import {useDispatch  } from 'react-redux';
import {FetchContext} from '../../../../context/FetchContext';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'

interface Params {
    platformid: string,
    serviceId: string
}

interface VPI {
    id:number,
    visualizationId:number
}

export interface DashboardI {
    position: Array<number>,
    dashboard_name: string,
    visualizationpresentation: Array<VPI>
}

export const Dashboard  :React.FC = () => {

    const {platformid,serviceId}  = useParams<Params>();
    const {authAxios} = useContext(FetchContext);
    const dispatch = useDispatch();
    const [detail,setDetail] = useState<DashboardI>({
        position:[],
        dashboard_name: '',
        visualizationpresentation:[]
    })
    
    useEffect(()=>{
        dispatch({type:PAGE_STATUS_LOADING});
      const dashboard = async() => {
          try{
            await authAxios.get(`dashbaord/${platformid}/${serviceId}`).then(({data}:any)=>{
                setDetail(data.data)
                dispatch({type: PAGE_STATUS_SUCCESS});
            })
          }catch(error){
            const payload = {message: error.message || error,
                explaination: ''}
            dispatch({type:PAGE_STATUS_ERROR, payload: payload});
        } 
      } 
      dashboard()
    },[authAxios])
    // <DashboardGrid title={detail.dashboard_name} prop={<DashboardSection /> }/>
    return(
        <>
           
        </>
    )
}
