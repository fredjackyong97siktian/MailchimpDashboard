import React from 'react';
import Grid from '@material-ui/core/Grid';
import {FeatureRoute} from './../feature/FeatureRoute';
import {
    Link,
    Redirect,
    Route,
    Switch,
    useRouteMatch
  } from 'react-router-dom'

  //const FeatureTest1 = React.lazy(() => import('./../feature/FeatureTest1'));
  interface DashboardI {
    path: string,
    name: string,
    exact ?: boolean,
    component : React.ElementType
}

const Dashboard : React.FC = () => {
    let { path } = useRouteMatch();
   return(
    <div >
        
        <Grid container spacing={1}>
          <Switch>      
                {FeatureRoute.map((item : DashboardI)=>{
                   return( 
                   <Route path={`${path}${item.path}`} 
                    exact={item.exact} name={item.name} >
                        <item.component />
                    </Route>)
                })}
          </Switch>
        </Grid>
    </div>    
   ); 
}

export default Dashboard