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
        borderRadius:'10px'
  },
  papertitle:{
    fontSize:'20px',
  }
  }));

export default useStyles