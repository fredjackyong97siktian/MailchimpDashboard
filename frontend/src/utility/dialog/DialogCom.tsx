import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './DialogCom-style';
import { Grid } from '@material-ui/core';
import  { DialogComInterface } from './DialogCom-interface';

const DialogCom: React.FC<DialogComInterface>= (props) => {
  return (
    <div>
 
      <Dialog
        open={props.dialogStatus.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.data.title}
        
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.data.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.data.action}
        </DialogActions>
      </Dialog>
    </div>
    );
}

export default  DialogCom
