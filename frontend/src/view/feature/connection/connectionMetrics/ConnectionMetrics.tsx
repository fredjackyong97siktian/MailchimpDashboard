import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from '../Connection-style';
import clsx from 'clsx';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {ConnectionMetricsSection} from './ConnectionMetricsSection';
export const ConnectionMetrics  :React.FC = () => {
    const title=""

    return(
        <>
            <DashboardGrid title={title} prop={ <ConnectionMetricsSection /> }/>
        </>
    )
}
