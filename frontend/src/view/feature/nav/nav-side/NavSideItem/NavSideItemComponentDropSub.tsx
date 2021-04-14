import React,{useEffect,useState,useContext} from 'react';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './../NavSideItem-style';
import Typography from '@material-ui/core/Typography';
import {FetchContext} from '../../../../../context/FetchContext';
import {useHistory , useParams} from 'react-router-dom'
import { Button } from '@material-ui/core';
interface openDropSub {
  open:boolean,
  api:string,
}

interface serviceI{
  service_name: string,
  dashboards: Array<{dashboard_id:string}>
}

interface detailI {
  name : string,
  services : Array<serviceI>
}

interface Params {
  platformid: string
}

export const NavSideItemComponentDropSub : React.FC<openDropSub>= ({open,api}) =>{
    const classes = useStyles();
    const history = useHistory();
    const {platformid}  = useParams<Params>();
    const {authAxios} = useContext(FetchContext);
    const [detail,setDetail] = useState<Array<detailI>>([])
    useEffect(()=>{
      list()
    },[authAxios])

    const list = async () => {
      try{
          await authAxios.get(`nav/${platformid}/${api}`).then(({data}:any)=>setDetail(data.data))
      }
      catch(error){
          const payload = {message: error.message || error,
              explaination: ''}
      } 
    }

    const onHandleClick = (dashboardId : string) => {
      history.push(`/platform/${platformid}/dashboard/${dashboardId}`)
    }

    let listDetail;

    if(detail.length>0){
      listDetail = detail.map((item)=>{
        return(
          <span key={item.name}>
            <List component="div" disablePadding>
                <ListItem className={clsx(classes.ListItemHeight,classes.ListItemBackground)}>
                <ListItemText className={classes.ListItemText} >
                  <Typography variant="subtitle2">
                      {item.name}
                  </Typography>
                </ListItemText> 
              </ListItem>
            </List>
            {item.services.map((detail)=>{
                return(
                  <List component="div" disablePadding key={detail.service_name}>
                      <ListItem button className={clsx(classes.ListItemHeight,classes.ListItemButton,classes.nested)} onClick={()=>onHandleClick(detail.dashboards[0].dashboard_id)}>
                      <ListItemText className={classes.ListItemDetail} >
                        <Typography variant="subtitle2">
                            {detail.service_name}
                        </Typography>
                      </ListItemText> 
                    </ListItem>
                  </List>                  
                )
              })
            }  
          </span>
        )
      })
    }else{
      listDetail = <List component="div" disablePadding >
                      <ListItem button className={clsx(classes.ListItemHeight,classes.AddConnection)}>
                      <ListItemText className={classes.ListItemText} >
                        
                        <Typography variant="subtitle2" align="center">
                        <span className={classes.AddConnectionButton}>
                           Add Connection 
                           </span>
                        </Typography>
                        
                      </ListItemText> 
                    </ListItem>
                  </List>     
    }

    return(  
      <Collapse in={open} timeout="auto" unmountOnExit>
        {listDetail}
      </Collapse>);
  }