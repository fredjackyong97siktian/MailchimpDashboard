import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles ,{styles} from './DialogCom-style';
import { Grid } from '@material-ui/core';
import  { DialogComInterface } from './DialogCom-interface';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: (() => void) | null;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogCom: React.FC<DialogComInterface>= ({size,data,dialogStatus,dialogSetting,type}) => {


  return (
    <div>
      <Dialog
        open={dialogStatus.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={size?.width? true: false}
      >
        <DialogTitle id="alert-dialog-title" onClose={dialogSetting.onCloseSet ? dialogStatus.onClose : null}>
          {data.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {data.action}
        </DialogActions>
      </Dialog>
    </div>
    );
}

export default  DialogCom
