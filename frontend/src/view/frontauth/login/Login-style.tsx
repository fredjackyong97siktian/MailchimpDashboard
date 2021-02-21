import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },
  },
  lowerpaper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },
  },
  lowerORpaper: {
    color:'grey',
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },
    '&::before':{
      content: "''",
      display: 'block',
      background: 'grey',
      width: '50%',
      height: '3px',
      margin: '0 10px'
    },
    '&::after':{
      content: "''",
      display: 'block',
      background: 'grey',
      width: '50%',
      height: '3px',
      margin: '0 10px'
    }

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  altauth: {
    margin: theme.spacing(10),
  },
  oauthButton: {
    borderRadius: 3,
    border: 0,
    height: 40,
    width: '100%',
    boxShadow: '0 1px 5px 1px grey',
    padding: '7px 10px',
  },
  oauthButtonIcon:{

    color: 'white',
    display: 'inline-block'
  },
  oauthButtonGrid:{
    color: 'white',

  },
  oauthButtonIconGrid: {
    width:'10%'
  },
  oauthButtonText:{
    textAlign: "center",
    margin: 'auto',

    color: 'white',
    width:'90%'

  }
}));

  export default useStyles;