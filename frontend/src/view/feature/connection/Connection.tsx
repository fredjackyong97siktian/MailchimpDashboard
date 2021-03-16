import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Connection-style';
import clsx from 'clsx';
import {DashboardGrid} from '../dashboard/DashboardGrid';
import {ConnectionSection} from './ConnectionSection';
import {windowpopStatus} from './../../../windowpop/windowpop';
export const Connection  :React.FC = () => {
    const title="My Connection"

    return(
        <>
            <DashboardGrid title={title} prop={<ConnectionSection /> }/>
        </>
    )
}
