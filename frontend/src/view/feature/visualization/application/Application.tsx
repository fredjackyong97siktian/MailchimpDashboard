import React,{useEffect} from 'react';
import {DashboardGrid} from '../../dashboard/DashboardGrid';
import {ApplicationSection} from './ApplicationSection';

export const Application  :React.FC = () => {
    const title="Application"

    return(
        <>
            <DashboardGrid title={title} prop={<ApplicationSection /> }/>
        </>
    )
}
