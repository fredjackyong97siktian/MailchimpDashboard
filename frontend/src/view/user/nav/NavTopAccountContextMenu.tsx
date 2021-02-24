import React  , {useContext}from 'react'
import ContextMenu from '../../../utility/context-menu/ContextMenu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {AuthContext} from '../../../context/AuthContext';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS} from '../../../view/modal/Loadingpage/redux/LoadingConstant'
const NavTopAccountContextMenu:React.FC = () => {
    const dispatch = useDispatch();
    const {logout} = useContext(AuthContext);
    
    //switchFunction
    const switchFunction = (check: string) => {
        switch(check){
            case 'myaccount':
                alert('myaccount')
                break;
            case 'logout':
                dispatch({type:PAGE_STATUS_LOADING});
                logout();
                dispatch({type:PAGE_STATUS_SUCCESS});
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