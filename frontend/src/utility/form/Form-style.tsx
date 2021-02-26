import { makeStyles } from '@material-ui/core/styles';

const useStylesForm = makeStyles((theme) => ({
    error_message: {
        '&:before':{
            display: 'inline',
            content: "'⚠ '",
        },
        color: "red"
    },
    error_outline: {
        "& .MuiOutlinedInput-input": {
            color: "red"
          },
        "& .MuiInputLabel-outlined": {
            color: "red"
          },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },    
      borderbottom: {
        borderBottom: `1px solid ${theme.palette.divider}`
      },
    
}));

  export default useStylesForm;