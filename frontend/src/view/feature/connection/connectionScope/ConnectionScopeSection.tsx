import React, {useEffect , useState ,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import makeStyle from './../Connection-style';
import clsx from 'clsx';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {FetchContext} from '../../../../context/FetchContext';
import {useHistory , useParams} from 'react-router-dom'
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS, PAGE_STATUS_ERROR} from '../../../modal/Loadingpage/redux/LoadingConstant'
import {scopeDisplayI} from '../ConnectionInterface';
import {scopeI} from './../ConnectionInterface';
import Icon from './../../../../img/brand';
import {windowpopOpen} from './../../../../windowpop/windowpop'
interface Params {
    platformid: string,
    serviceId: string
}

export const ConnectionScopeSection:React.FC = () => {
    const {platformid,serviceId}  = useParams<Params>();
    const classes = makeStyle();
    const {authAxios} = useContext(FetchContext);
    const [scope, setScope] = useState<scopeDisplayI>({
        service_name:'',
        scopes:[],
        application: {
            name: '',
            auth_method: '',
            direct_url_component: '',
            imglocation: ''
        }
    });

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch({type:PAGE_STATUS_LOADING});
        const category = async() => {
            try{
                const {data} = await authAxios.post(`platform/${platformid}/myconnection/app/${serviceId}`)
                setScope(data.data);
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

    const scopeOption = scope.scopes.map((item : scopeI)=>{
       return(
       <Grid item xs={12} md={6} lg={4} className={classes.paperPadding}> 
            <Button variant="contained" onClick={()=>windowpopOpen(`${scope.application.direct_url_component}id=${serviceId}&scope=${item.term}`)} className={classes.buttonWidth}> {item.name } </Button > 
       </Grid>)
    })
//  <ConnectionSectionItem />
    return(  
        <Grid item xs={12} >               
            <Paper className={classes.paper} elevation={0}>
                <Grid container direction="row" justify="flex-start" alignItems="center" >
                    <span className={clsx(classes.subtopictitle,classes.paperPadding,classes.position)}>
                        <Icon name={scope.application.imglocation} />
                        <span className={classes.grid}>
                         {scope.service_name} 
                        </span>
                        <Button className={classes.buttonDetail} onClick={()=>windowpopOpen(scope.application.direct_url_component)}> Connect </Button>
                    </span>
                </Grid>
                <Grid container direction="row" justify="flex-start" className={clsx(classes.subtopictitle,classes.paperPadding)}>
                   Scope :
                </Grid>
                <Grid container direction="row" justify="flex-start" className={classes.buttonMargin}>
                    {scopeOption}
                </Grid>
            </Paper>
        </Grid>
    )
}
