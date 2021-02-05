import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {   
      display: 'flex',
      outline: "none",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "10px",
      width:'250px',
      height:'250px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    papercontent: {
      outline: "none",
      margin: 'auto',
      padding: 'auto',  
    }
  }),
);

export default useStyles