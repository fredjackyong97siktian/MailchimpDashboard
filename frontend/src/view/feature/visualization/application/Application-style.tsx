import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  grid:{
    margin:'5px',
  },
  paper:{
        display: 'flex',
        flexDirection: 'column',
  },
  paperPadding:{
    padding: theme.spacing(3)
  },
  paperMargin:{
    margin: theme.spacing(1),
  },
  paperRelative:{
    position:'relative',
  },
  paperAbsolute:{
    position:'absolute'
  },
  papertitle:{
    fontSize:'20px',
  },
  paperBorder:{
    borderColor:'green'
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
    fontSize:'10px',
    margin: theme.spacing(0.2)
  },
  buttonHeight:{
    height:'100px'
  },
  buttonPadding: {
    position:'relative',
    padding: theme.spacing(0.5)
  },
  buttonGrid:{
    textAlign:'left',
  },
  buttonIcon:{
    margin:theme.spacing(0.5),
    position:'absolute',
  },
  buttonApp:{
    top:'0',
    left:'0',    
  },
  buttonMetrics:{
    '&:hover $buttonMark':{
      display: 'inline',
    }
  },
  buttonMetricsActive:{
    borderWidth:'medium',
    borderColor:'green'
  },
  buttonMark:{
    backgroundColor:'transparent',
    display:'none',
    color:'grey',
    top:'0',
    right:'0',
    '&:hover':{
      color:'orange',
    }
  },
  buttonMarkDetail:{
    padding: 0 ,
    backgroundColor: 'transparent' 
  },
  buttonCorrect:{
    color:'green',
    bottom:'0',
    right:'0',
  },
  serviceList:{
    lineHeight: 'normal',
    fontSize:'12px',
    fontWeight:'bold',
    letterSpacing:'0px',
    textTransform:'none',
  },
  dialogTitle:{
    marginBottom: theme.spacing(1)
  },
  dialogContent:{
    color:'black',
    fontWeight:'bold',
  },
  chartIcon:{
    color:'white',
    backgroundColor:'purple',
    borderRadius:'4px'
  },
  connectionStatus:{
    fontSize:'10px',
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    borderTopRightRadius:'2px',
    borderBottomRightRadius:'2px',
    backgroundColor:'green',
    color:'white'
  }



  }));

export default useStyles