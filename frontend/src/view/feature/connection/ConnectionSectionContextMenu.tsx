import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import ContextMenu from '../../../utility/context-menu/ContextMenu';
import {IoEllipsisVerticalSharp} from 'react-icons/io5'

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