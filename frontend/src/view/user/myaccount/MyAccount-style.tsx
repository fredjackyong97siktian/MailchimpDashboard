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
        height:'70px',
       
    },
    platformContainer:{
        padding: '10px 0px',
        [theme.breakpoints.up('sm')]: {
            padding: '10px 60px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '10px 100px',
        },
    },

  }));

export default useStyles