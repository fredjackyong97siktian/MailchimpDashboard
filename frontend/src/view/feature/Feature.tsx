import React, { ReactDOM, useState , useContext } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavSide from './nav/nav-side/NavSide'
import NavTop from './nav/nav-top/NavTop'
import Box from '@material-ui/core/Box';
import useStyles from './Feature-style'
import CssBaseline from '@material-ui/core/CssBaseline';
import { SetStateAction } from 'react';


const Feature : React.FC = () => {
   const [open,setOpen] = useState(true);
   const classes = useStyles();
   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
   return(
    <div className={classes.root}>

      <NavTop setOpen={setOpen} open={open}/>
      <NavSide setOpen={setOpen} open={open}/>
      <main className={classes.content}>
        
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

        </Container>
      </main>
    </div>    
   ); 
}

export default Feature