import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    paper:{
        padding: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:'white',
        width:'100%',
        borderRadius:'10px',
        boxShadow: '0.5px grey',
    },
    background: {
        backgroundColor: '#1d1124',
        height:'280px'
    },
    platformGrid:{

        padding: '80px 125px',
        color: 'white'
    },
    platformGridItem:{
        width:'100%',
        height:'100%',
        backgroundColor: 'red'
    },
    platform_outer:{
        position:'relative'
    }
  }));

export default useStyles