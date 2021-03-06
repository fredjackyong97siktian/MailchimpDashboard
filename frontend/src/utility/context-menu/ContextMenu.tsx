import React , {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
interface ContextMenuI{
    switchFunction : (check:string)=>void,
    MenuItemListOption: Array<{tag: string, actionTag:string}>,
    IconButtonShown : React.ReactNode,
    MenuFontSize ?: string,
    backgroundColor ?: string
}
const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props: MenuProps) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

const ContextMenu: React.FC<ContextMenuI> = ({switchFunction, MenuItemListOption, IconButtonShown , MenuFontSize, backgroundColor}) => {
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (actionTag: string) => {
    setAnchorEl(null);
    switchFunction(actionTag);
  };

  //adjustable fontsize
  let fontSize={};
  MenuFontSize ? fontSize = {fontSize:MenuFontSize} : fontSize = {fontSize:'15px'}
  
  const MenuItemList = MenuItemListOption.map((item)=>{
    
      return (
           <MenuItem key={item.tag} style={fontSize} onClick={()=>handleClose(item.actionTag)}>{item.tag}</MenuItem>
      )
  })
    return (
       <div>
      <IconButton size='small'
        aria-controls="customized-menu"
        aria-haspopup="true"
        style={{padding: 7 ,backgroundColor: backgroundColor? backgroundColor: '' }}
        onClick={handleClick}
      >
        {IconButtonShown}
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          {MenuItemList }
      </StyledMenu>
    </div>
    );
}
export default ContextMenu;