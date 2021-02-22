import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    paper:{
        height:'180px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:'white',
        width:'100%',
        borderRadius:'10px',
        boxShadow: '0.5px grey',
        textTransform: "none"
    },
    background: {
        backgroundColor: '#1d1124',
        height:'280px',
       
    },
    platformContainer:{
        padding: '0px 20px',
        [theme.breakpoints.up('sm')]: {
            padding: '50px 60px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '50px 100px',
        },
    },
    textBlack:{
        color: 'black',
    },
    textWhite:{
        color: 'white',
    },
    textGrey:{
        color:'grey',
    },
    platformTitle: {
        padding:'10px 0 0 0',
    },
    platformGrid:{
        padding: '20px 0px',
    },
    platformAddPlatform:{
        color:'#0859C6',
        width:'100px',
    },
    platformButtonWidth:{
        width:'100px',
    },
    platformPlatformDetailWord:{
        wordWrap: "break-word",
        width:'100%',
    },
    platformPlatformDetailTitle:{
        fontSize:'15px',
    },
    platformPlatformDetailDesc:{
        color:'grey',
        fontSize:'10px'
    },
    platformPlatformDetail:{
        padding: '10px 0',
        display:'flex',
        height:'170px',
    },
  }));

export default useStyles