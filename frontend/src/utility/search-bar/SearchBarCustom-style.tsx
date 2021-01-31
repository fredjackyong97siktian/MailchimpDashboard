import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundColor: {

        "& .MuiInput-input": {
            borderBottom: '1px solid #605865',
            color: "white",
        },
        "&:hover .MuiInput-input": {
            borderBottom: '3px solid #605865',
        },
        "& .MuiPaper-outlined":{
            color: "white",
        },
        "& .MuiIconButton-label": {
            color: "white",
        },
        searchIconButton: {
            color:'white',
        },
        backgroundColor:'transparent',
        color: "white",
    }
}));

  export default useStyles;