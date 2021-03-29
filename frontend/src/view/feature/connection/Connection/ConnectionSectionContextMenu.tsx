import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from '../Connection-style';
import ContextMenu from '../../../../utility/context-menu/ContextMenu';
import {IoEllipsisVerticalSharp} from 'react-icons/io5'
import {windowpopOpen} from '../../../../windowpop/windowpop';
import {useHistory , useParams} from 'react-router-dom'
import {contextI} from '../ConnectionInterface';
interface Params {
    platformid: string
}

export const ConnectionSectionContextMenuConnected  :React.FC = () => {
    const classes = makeStyle();
    //switchFunction
    const switchFunction = (check: string) => {
        switch(check){
            case 'd':
                break;
            default:
                break;
            }
    }
    //MenuItemListOption
        const MenuItemListOption = [
            {
                tag: "Disconnect",
                actionTag: "d"
            },  
        ]
    return(
        <>
        <ContextMenu MenuFontSize={"11px"} switchFunction={switchFunction} MenuItemListOption={MenuItemListOption} IconButtonShown={ <IoEllipsisVerticalSharp size={17}/> } />
        </>
    )
}
interface CMDI {
    url : string
}
export const ConnectionSectionContextMenuDisconnected  :React.FC = () => {
    const classes = makeStyle();
    //switchFunction
    const switchFunction = (check: string) => {
        switch(check){
            case 'c':
                break;
            default:
                break;
            }
    }
    //MenuItemListOption
        const MenuItemListOption = [
            {
                tag: "Connect",
                actionTag: "c"
            },  
        ]
    return(
        <>
        <ContextMenu MenuFontSize={"11px"} switchFunction={switchFunction} MenuItemListOption={MenuItemListOption} IconButtonShown={ <IoEllipsisVerticalSharp size={17}/> } />
        </>
    )
}
export const ConnectionSectionContextMenuNoConnection  :React.FC = () => {
    const classes = makeStyle();
    //switchFunction
    const switchFunction = (check: string) => {
        switch(check){
            case 'c':
                break;
            default:
                break;
            }
    }
    //MenuItemListOption
        const MenuItemListOption = [
            {
                tag: "Connect",
                actionTag: "c"
            },  
        ]
    return(
        <>
        <ContextMenu MenuFontSize={"11px"} switchFunction={switchFunction} MenuItemListOption={MenuItemListOption} IconButtonShown={ <IoEllipsisVerticalSharp size={17}/> } />
        </>
    )
}

/* Check Scope */

export const ConnectionSectionContextMenuMetrics :React.FC<contextI> = ({serviceId,authenticationServiceId}) => {
    const {platformid}  = useParams<Params>();
    const history = useHistory();
    const classes = makeStyle();

    //switchFunction
    const switchFunction = (check: string) => {
        console.log('Context Menu' + authenticationServiceId)
        switch(check){
            case 's':
                history.push({
                    pathname:`/platform/${platformid}/service/${serviceId}`,
                    state: authenticationServiceId})
                break;
            default:
                break;
            }
    }
    //MenuItemListOption
        const MenuItemListOption = [
            {
                tag: "Check Metrics",
                actionTag: "s"
            },  
        ]
    return(
        <>
        <ContextMenu MenuFontSize={"11px"} switchFunction={switchFunction} MenuItemListOption={MenuItemListOption} IconButtonShown={ <IoEllipsisVerticalSharp size={17}/> } />
        </>
    )
}