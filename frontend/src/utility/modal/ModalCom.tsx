import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './ModalCom-style'
import { Grid } from '@material-ui/core';

interface ModalComType {
  component: React.ReactFragment;
}

const ModalCom: React.FC<ModalComType>= (component) => {
    const classes = useStyles();
    console.log(component);
    return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in>
          <div className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center" className={classes.papercontent}>
             {component.component}
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
    );
}

export default  ModalCom
