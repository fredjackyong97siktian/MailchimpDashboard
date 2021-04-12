import React,{useEffect,useState,useContext} from 'react';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './../NavSideItem-style';
import Typography from '@material-ui/core/Typography';
import {FetchContext} from '../../../../../context/FetchContext';
import { useParams} from 'react-router-dom'
interface openDropSub {
  open:boolean,
  api:string,
}

interface serviceI{
  service_name: string
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
    const {platformid}  = useParams<Params>();
    const {authAxios} = useContext(FetchContext);
    const [detail,setDetail] = useState<Array<detailI>>([])

    useEffect(()=>{
      const list = async() => {
        try{
            const {data} = await authAxios.get(`nav/${platformid}/${api}`)
            console.log(data.data);
            setDetail(data.data);
        }
        catch(error){
            const payload = {message: error.message || error,
                explaination: ''}
        } 
    }
    list()
    },[])

    let listDetail;

    if(detail.length>0){
      listDetail = detail.map((item)=>{
        console.log('yahoo!!')
        console.log(item)
        return(
          <span>
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
                  <List component="div" disablePadding>
                      <ListItem button className={clsx(classes.ListItemHeight,classes.ListItemButton,classes.nested)}>
                      <ListItemText className={classes.ListItemText} >
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
    }

    return(  
      <Collapse in={open} timeout="auto" unmountOnExit>
        {listDetail}
      </Collapse>);
  }