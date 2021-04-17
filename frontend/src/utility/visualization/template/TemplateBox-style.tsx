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
        height:'330px',
        width:'280px'
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
    },
    Line_body:{
        position:'relative',
        textAlign:'center'
    },
    Score_body:{
        position:'absolute',
        top: 80,
        left : 120
    },
    multiFigure:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        fontSize:'15px',    
        paddingTop:'10px', 

    },
    figure:{
        fontSize:'35px',
        paddingTop:'10px',
        paddingLeft:'10px'
    },
    figureUnit:{
        fontSize:'10px'
    },
    figurePercent:{
        alignItems:'center',
        display:'flex',
        fontSize:'10px',
        justifyContent: 'center'
    },
    Scoreline_body:{
        height:'230px',
        position:'absolute',
        bottom:'0',
    },
    icon:{
        fontSize:'20px',
    },
    green:{
        color:'green'
    },
    red:{
        color:'red'
    },
    grey:{
        color:'grey'
    },
    progressBar:{
        position:'absolute',
        top:100,
        left:120,
        opacaity:1
    }
    
  }),
);