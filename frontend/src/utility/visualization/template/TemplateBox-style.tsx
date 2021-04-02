import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0.5),
      margin: 'auto',
      maxWidth: 500,
    },
    relative:{
        position:'relative'
    },
    topleft:{
        position:'absolute',
        top:0,
        left:0
    },
    topright:{
        position:'absolute',
        top:0,
        right:0  
    },
    bottom:{
        position:'absolute',
        top:40,
        left:5,
        right:5,
        bottom:5
    },
    size:{
        height:'250px',
        width:'200px'
    },
    chartsize:{
        height:'100%',
        width:'90%'
    },
    padding:{
        padding: theme.spacing(0)
    },
    margin:{
        margin: theme.spacing(0.5)
    },
    position:{
        color:'grey'
    },
    title:{
        fontWeight:'bold',
        marginBottom:theme.spacing(-0.5)
    },
    subtitle:{
        color:'grey',
        justifyContent: 'center',
        display:'flex',
        fontSize:'10px'
    },
    button:{
        padding:0,
        backgroundColor:'transparent'
    },
    subtitleButton:{
        position:'relative',
        textTransform:'none',
        fontSize:'10px',
        width:'90%',
        height:'15px',
        paddingTop:theme.spacing(0),
        paddingBottom:theme.spacing(0),
        backgroundColor:'transparent',
        '&:hover':{
            backgroundColor:'transparent'
        }
    },
    subtitleButtontext:{
        position:'absolute',
        left: '50',
    },
    subtitleButtonicon:{
        marginTop:'-2.5px',
        position:'absolute',
        top:'0',
        right:'0',
    }
  }),
);