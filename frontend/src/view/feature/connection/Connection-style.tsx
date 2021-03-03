import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  grid:{
    margin:'5px'
  },
  sectionitem:{
    marginTop:'10px',
    marginBottom:'10px'
  },
  topictitle:{
    color:'black',
    fontWeight:'bold',
    fontSize:'28px'
  },
  subtopictitle:{
    color:'black',
    fontWeight:'bold',
    fontSize:'18px'  
  },
  paper:{
        display: 'flex',
 
        flexDirection: 'column',
  },
  paperPadding:{
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
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
      fontWeight:'bold'
  }

  }));

export default useStyles