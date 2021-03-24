import React from 'react';
//import {DashboardGrid} from './../dashboard/DashboardGrid';
import {Connection} from '../connection/Connection/Connection';
import {ConnectionMetrics} from '../connection/connectionMetrics/ConnectionMetrics';
//const FeatureTest1 = React.lazy(() => import('./FeatureTest1'));
//const FeatureTest2 = React.lazy(() => import('./FeatureTest2'));
//const FeatureTest3 = React.lazy(() => import('./FeatureTest3'));

export const FeatureRoute = [
    { path: '/myconnection', name: 'MyConnection', component: Connection , exact:false },
    { path: '/service/:serviceId', name: 'ConnectionMetrics', component: ConnectionMetrics , exact:false},
]