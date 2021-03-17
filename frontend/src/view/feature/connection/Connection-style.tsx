import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  grid:{
    margin:'5px',
  },
  position:{
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center"
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
  },
  buttonWidth:{
    backgroundColor: 'transparent',
    width:'100%'
  },
  buttonMargin:{
    marginTop:'10px',
    marginBottom:'30px'
  },
  buttonDetail: {
    margin:'0',
    backgroundColor:'green',
    fontSize:'7px',
    width:'10px',
    height:'15px',

  }

  }));

export default useStyles