import React,{useEffect,useState,useContext} from 'react';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {DashboardSection} from './DashboardSection';
import {useHistory , useParams, useLocation} from 'react-router-dom'
import {useDispatch  } from 'react-redux';
import {FetchContext} from '../../../../context/FetchContext';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'
import { useSnackbar } from 'notistack';
interface Params {
    platformid: string,
    dashboardId: string
}
//
export interface VPI {
    id:number,
    visualizationId:number,
    selection: string,
    visualization:{
      id:number,
      metrics:{
        displayName: string,
        api:string,
        metricsgroup: {
          name: string
        },
        service: {
          id: number,
          application: {
              name: string,
          },
          authenticationServices: [
              {
                  ap_id: string,
                  authentication: {
                      authentication_id: string
                  }
              }
          ]
      }
      }
      subchart:{
        reference_component: string,
        chart: {
          id: number,
          charttype: {
              name: string
          }
      }
      }
    }
}

export interface DashboardI {
    position: Array<number>,
    dashboard_name : string,
    visualizationpresentations: Array<VPI>
}
function arraysEqual(a :Array<number>, b :Array<number>) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;


  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export const Dashboard  :React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
    const {platformid,dashboardId}  = useParams<Params>();
    const {authAxios} = useContext(FetchContext);
    const dispatch = useDispatch();
    const [name,setName] = useState<string>('');
    const [position,setPosition]= useState<Array<number>>([]);
    const [listData, setListData] = useState<Array<any>>([]);
    let listDataRetrieve :Array<any> =[]
    const onSetListData = (arr : any) => {
        setListData(arr);
    }
    const onSetPosition = async(arr: any)=>{
      if(!arraysEqual(listData,arr)){
        dispatch({type:PAGE_STATUS_LOADING});
        try{
          setPosition(arr);
          await authAxios.post(`dashboard/${platformid}/${dashboardId}/position`,{position:arr}).then(()=>{
            dispatch({type: PAGE_STATUS_SUCCESS});
            enqueueSnackbar('New position is saved.',{variant: 'success'});
          })
        }catch(error){
          const payload = {message: error.message || error,
              explaination: ''}
          dispatch({type:PAGE_STATUS_ERROR, payload: payload});
        } 
      }

    }

    useEffect(()=>{
        dispatch({type:PAGE_STATUS_LOADING});
      const dashboard = async() => {
          try{
            await authAxios.get(`dashboard/${platformid}/${dashboardId}/dashboard`).then(({data}:any)=>{
                //console.log(data.data.visualizationId)
                console.log(data)
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
                    listDataRetrieve.push(itemData)
                   /// setListData(oldArray => [...oldArray, itemData]);
                  })
                  setListData(listDataRetrieve);
                  setPosition(Data.position)
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
           <DashboardGrid title={name} prop={<DashboardSection listDataProps={listData} onSetListData={onSetListData} position={position} onSetPosition={onSetPosition}/>} />
        </>
    )
}
