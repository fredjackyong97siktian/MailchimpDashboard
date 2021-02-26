import React  , {useContext}from 'react'
import {useHistory} from 'react-router-dom';
import ContextMenu from '../../../utility/context-menu/ContextMenu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {AuthContext} from '../../../context/AuthContext';
import {useDispatch  } from 'react-redux';
import {PAGE_STATUS_LOADING, PAGE_STATUS_SUCCESS} from '../../../view/modal/Loadingpage/redux/LoadingConstant'
import config from './../../../config'
const NavTopAccountContextMenu:React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {logout} = useContext(AuthContext);
    
    //switchFunction
    const switchFunction = (check: string) => {
        switch(check){
            case 'myaccount':
                window.location.href= config.API_CLIENT+'/myacount'
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