import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './../Platform-style'
import AddIcon from '@material-ui/icons/Add';
import config from './../../../../config';
import {useHistory} from 'react-router-dom';
export const PlatformItemAdd:React.FC = () => {
    const history = useHistory();
    const platformOnclick = () => {
        history.push('/platform/add');
        //window.location.replace(String(config.API_CLIENT+'/platform/add'));
       }

    const classes = useStyles();
    return(
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained"  className={classes.paper} onClick={platformOnclick}> 
          <Grid container direction="column" justify="space-between" alignItems="center" className={classes.platformAddPlatform}>
            <AddIcon />
          <Typography className={classes.platformAddPlatform} variant="body2" gutterBottom>
            Add Platform
          </Typography> 
          </Grid>
          </Button>
      </Grid>
    )
}