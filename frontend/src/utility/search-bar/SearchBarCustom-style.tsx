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
        "& .MuiInput-input:focus": {
            borderBottom: '3px solid #605865',
        },
        "& .MuiIconButton-label": {
            color: "white",
        },
        backgroundColor:'transparent',
        color: "white",
        "&:focus":{
            width:'10%'
        }
    }
}));

  export default useStyles;