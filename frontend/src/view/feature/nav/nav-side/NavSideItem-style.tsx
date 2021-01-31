import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    nested: {
        backgroundColor:"#605865",
        paddingLeft: theme.spacing(4),
    },
    divider: {
        background:'#605865',
    }
}));

  export default useStyles;