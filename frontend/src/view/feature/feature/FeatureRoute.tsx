import React from 'react';
//import {DashboardGrid} from './../dashboard/DashboardGrid';
import {Connection} from '../connection/Connection';
//const FeatureTest1 = React.lazy(() => import('./FeatureTest1'));
//const FeatureTest2 = React.lazy(() => import('./FeatureTest2'));
//const FeatureTest3 = React.lazy(() => import('./FeatureTest3'));

export const FeatureRoute = [
    { path: '/myconnection', name: 'MyConnection', component: Connection , exact:false },
]