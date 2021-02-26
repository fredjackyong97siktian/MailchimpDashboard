import { makeStyles ,Theme} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
 
    },
    appbar:{
        padding:'10px 0 0 0',
        margin:'0 0 10px 0',
        backgroundColor:'transparent'
    },
    paper:{
        borderRadius:'10px',
        padding:'15px 10px',
     
    },
    tab:{
      fontWeight:'bold',
      fontSize:'13px',
      color:'black',
      textTransform :'none'
    },
    label: {
      color: "red"
    },
    indicator: {
      backgroundColor: "#800080"
    },  
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    tabResSize:{
      display:'none',
      [theme.breakpoints.up('md')]: {
        display:'inline'
      },
    },
    Title:{
      fontWeight:'bold',
      fontSize:'30px',
      padding:'10px 0',
      display: 'inline-block'
    },
    menuButton: {
      color:'	#1d1124',
      display:'inline',
      [theme.breakpoints.up('md')]: {
        display:'none'
      },
    },
    grid:{
      padding:'0 0 0 30px'
    },
    drawerPaper: {
      backgroundColor : 'white',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
  }));

  export default useStyles;