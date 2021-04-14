import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ListHeight:{
        maxHeight:'300px',
        overflowY:'auto'
    },
    ListItemText: {
        color:'white',
    },
    ListItemButton: {
        "&:hover": {
            backgroundColor: "#605865",
          }
    },
    ListItemIcon: {
        color:'white',
    },
    ListItemHeight:{
        height:'30px'
    },
    nested: {
        backgroundColor:'white',
        //backgroundColor:"#605865",
        paddingLeft: theme.spacing(4),
    },
    divider: {
        background:'#605865',
    },
    ListItemDetail:{
        color:'black'
    },
    ListItemBackground:{
        backgroundColor:'#1d1124',
    },
    AddConnection:{
        backgroundColor:'white',
        "&:hover": {
            backgroundColor: "#eeeeee",
          }
    },
    AddConnectionButton:{
        color:'black',
        paddingLeft:'30px',
        paddingRight:'30px',
        borderStyle: 'dashed',
        borderColor:'grey',

    }
}));

  export default useStyles;