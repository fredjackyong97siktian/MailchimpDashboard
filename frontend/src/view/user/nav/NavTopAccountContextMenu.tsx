import React  , {useContext}from 'react'
import ContextMenu from '../../../utility/context-menu/ContextMenu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {AuthContext} from '../../../context/AuthContext';

const NavTopAccountContextMenu:React.FC = () => {
    const {logout} = useContext(AuthContext);
    
    //switchFunction
    const switchFunction = (check: string) => {
        switch(check){
            case 'myaccount':
                alert('myaccount')
                break;
            case 'logout':
                logout();
                break;
            default:
                break;
        }
    }

    //MenuItemListOption
    const MenuItemListOption = [
        {
            tag: "My Account",
            actionTag: "myaccount"
        },
        {
            tag: "Logout",
            actionTag: "logout"
        },    
    ]
    return (
        <>
        <ContextMenu switchFunction={switchFunction} MenuItemListOption={MenuItemListOption} IconButtonShown={ <AccountCircleIcon style={{fill: "green", fontSize:'35px'}}/>} />
        </>
    )
}

export default NavTopAccountContextMenu