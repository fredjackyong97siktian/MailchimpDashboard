import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
    appBar: {
      backgroundColor: 'transparent',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    backgroundColor: {
      backgroundColor: '#ffffff',
    },
    menuButton: {
        color:'	#1d1124',
        marginRight: 36,
      },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        color:'black',
        flexGrow: 1,
    },
    platformtitle:{
      color:'white',
      flexGrow: 1,      
    }

}));

  export default useStyles;