import React, { ReactDOM ,useEffect, useState ,useContext} from 'react';
import clsx from 'clsx';
import useStyles from './NavTop-style'; 
import {NavTopI} from './../../../../model/nav/Nav'
import Button from '@material-ui/core/Button';
import ContextMenu from './../../../../utility/context-menu/ContextMenu';
import { useSelector } from 'react-redux';
import {RootState} from './../../../../reducer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useHistory , useParams} from 'react-router-dom'
import config from './../../../../config'
interface Params {
    platformid: string
}

const NavTopPlatform : React.FC= () => {
    const PlatformDetail = useSelector((state:RootState)=>state.feature);
        //switchFunction
        const history = useHistory();
        const {platformid}  = useParams<Params>();
        const switchFunction = (check: string) => {
            switch(check){
                case 'connection':
                    history.push('/platform/'+platformid+'/myconnection')
                    break;
                default:
                    break;
            }
        }
    
        //MenuItemListOption
        const MenuItemListOption = [
            {
                tag: "My Connection",
                actionTag: "connection"
            },  
        ]

        //IconnButtonShown
        const IconButton:React.FC = () => {
            return (    
            <Button className={classes.platformbar}>
                {PlatformDetail.platform_name} <ArrowDropDownIcon />
            </Button>)
        }
    //ContextMenu
    const classes = useStyles();

   return(
    <>
    <ContextMenu MenuFontSize={"11px"} switchFunction={switchFunction} MenuItemListOption={MenuItemListOption} IconButtonShown={ <IconButton /> } backgroundColor='transparent'/>
    </>
   ); 
}

export default NavTopPlatform