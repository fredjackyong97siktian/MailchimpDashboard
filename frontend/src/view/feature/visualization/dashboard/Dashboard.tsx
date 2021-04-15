import React,{useEffect,useState,useContext} from 'react';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {DashboardSection} from './DashboardSection';
import {useHistory , useParams, useLocation} from 'react-router-dom'
import {useDispatch  } from 'react-redux';
import {FetchContext} from '../../../../context/FetchContext';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'

interface Params {
    platformid: string,
    dashboardId: string
}

export interface VPI {
    id:number,
    visualizationId:number
}

export interface DashboardI {
    position: Array<number>,
    dashboard_name : string,
    visualizationpresentations: Array<VPI>
}

export const Dashboard  :React.FC = () => {

    const {platformid,dashboardId}  = useParams<Params>();
    const {authAxios} = useContext(FetchContext);
    const dispatch = useDispatch();
    const [name,setName] = useState<string>('');
    const [listData, setListData] = useState<Array<any>>([]);
    const onSetListData = (arr : any) => {
        setListData(arr);
    }
    useEffect(()=>{
        dispatch({type:PAGE_STATUS_LOADING});
      const dashboard = async() => {
          try{
            await authAxios.get(`dashboard/${platformid}/${dashboardId}`).then(({data}:any)=>{
                //console.log(data.data.visualizationId)
                const Data= data.data;
                setName(Data.dashboard_name)
                let i =0;
                Data.position.map((item : any)=>{
                    const itemData :any = (Data.visualizationpresentations.filter((obj :any) => {
                      return obj.id === item
                    }))[0]
                    itemData.position = i;
                    i = i + 1;
                    console.log(`${i}. It is ${itemData}`)
                    setListData(oldArray => [...oldArray, itemData]);
                  })
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

    return(
        <>
           <DashboardGrid title={name} prop={<DashboardSection listDataProps={listData} onSetListData={onSetListData}/> }/>
        </>
    )
}
