import React from 'react';
import {Facebook } from './facebook';
import {LinkedIn} from './linkedin';
import {Zoho} from './zoho';
import {Quickbooks} from './quickbooks';

interface iconI {
    name:string
}
const icons : any = {
    'facebook': <Facebook />,
    'linkedin' : <LinkedIn />,
    'zoho' : <Zoho />,
    'quickbooks': <Quickbooks />
};

const  Icon :React.FC<iconI>  = ({name}) => {
   return (
      <>
        {icons[name]}
      </>
      );
}

export default Icon;