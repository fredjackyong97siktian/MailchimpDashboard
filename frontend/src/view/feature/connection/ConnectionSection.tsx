import React, {useEffect , useState ,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import clsx from 'clsx';
import {DashboardGrid} from '../dashboard/DashboardGrid';
import {ConnectionSectionItem} from './ConnectionSectionItem';
import {FetchContext} from '../../../context/FetchContext';
import {useHistory , useParams} from 'react-router-dom'
import {categoryI} from './ConnectionInterface';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../modal/Loadingpage/redux/LoadingConstant'

interface Params {
    platformid: string
}

export const ConnectionSection:React.FC = () => {
    const {platformid}  = useParams<Params>();
    const classes = makeStyle();
    const {authAxios} = useContext(FetchContext);
    const [category,setCategory] = useState<Array<categoryI>>([]);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch({type:PAGE_STATUS_LOADING});
        const category = async() => {
            try{
                const {data} = await authAxios.get("platform/"+platformid+"/myconnection")
                setCategory(data.data)
                dispatch({type: PAGE_STATUS_SUCCESS});
            }
            catch(error){
                const payload = {message: error.message || error,
                    explaination: ''}
                dispatch({type:PAGE_STATUS_ERROR, payload: payload});
            } 
        }
        category()
    },[authAxios])
    console.log(category)
    const cat = category.map((item)=>{
        return(
            <ConnectionSectionItem id={item.id} name={item.name} services={item.services}/>
        )
    })
//  <ConnectionSectionItem />
    return(  
        <Grid item xs={12} >               
            <Paper className={classes.paper} elevation={0}>
                {cat}
            </Paper>
        </Grid>
    )
}
