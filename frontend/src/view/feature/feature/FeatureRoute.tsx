import React from 'react';
//import {DashboardGrid} from './../dashboard/DashboardGrid';
import {ConnectionSectionItem} from './../connection/ConnectionSectionItem';
//const FeatureTest1 = React.lazy(() => import('./FeatureTest1'));
//const FeatureTest2 = React.lazy(() => import('./FeatureTest2'));
//const FeatureTest3 = React.lazy(() => import('./FeatureTest3'));

export const FeatureRoute = [
    { path: '/FeatureTest1', name: 'FeatureTest1', component: ConnectionSectionItem , exact:false },
]