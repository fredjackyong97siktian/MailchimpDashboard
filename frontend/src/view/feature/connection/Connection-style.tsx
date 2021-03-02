import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  topictitle:{
    color:'black',
    fontWeight:'bold',
    fontSize:'28px'
  },  
  paper:{
        paddingTop: theme.spacing(1),
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
  },
  papertitle:{
    fontSize:'20px',
  },
  item:{
      margin: 'auto',
      height:"70px",
  },
  icon:{
    margin:'auto',
  },
  appdetail:{
      height: '100%'
  },
  appn:{
      fontWeight:'bold',
      fontSize:'17px'
  },
  appd:{
    fontSize:'12px',
    color:'grey'   
  },
  appstatus:{
      paddingTop:'12px'
  },
  appstatustext:{
      fontSize:'10px',
      
  }

  }));

export default useStyles