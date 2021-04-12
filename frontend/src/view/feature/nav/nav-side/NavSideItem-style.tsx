import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ListHeight:{
        maxHeight:'300px',
        overflowY:'scroll'
    },
    ListItemText: {
        color:'white',
    },
    ListItemButton: {
        "&:hover": {
            backgroundColor: "#3b2349",
          }
    },
    ListItemIcon: {
        color:'white',
    },
    ListItemHeight:{
        height:'30px'
    },
    nested: {
        backgroundColor:"#605865",
        paddingLeft: theme.spacing(4),
    },
    divider: {
        background:'#605865',
    },
    ListItemTitle:{

    },
    ListItemBackground:{
        backgroundColor:"black",
    }
}));

  export default useStyles;