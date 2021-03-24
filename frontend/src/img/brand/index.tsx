import React from 'react';
import {Facebook } from './facebook';
import {LinkedIn} from './linkedin';
import {Zoho} from './zoho';
import {Quickbooks} from './quickbooks';
import {Mailchimp} from './mailchimp';
export interface iconSize {
  sizeNumber: number
}
interface iconI {
    name:string,
    size?: 'standard' | 'small'
}


const  Icon :React.FC<iconI>  = ({name, size}) => {
  let sizeNumber = 0;

  switch(size){
    case 'standard':
      sizeNumber = 50;
      break;
    case 'small':
      sizeNumber = 15;
      break;
    default:
      sizeNumber = 50;
      break;
  }

    const icons : any = {
      'facebook': <Facebook sizeNumber={sizeNumber}/>,
      'linkedin' : <LinkedIn sizeNumber={sizeNumber}/>,
      'zoho' : <Zoho sizeNumber={sizeNumber}/>,
      'quickbooks': <Quickbooks sizeNumber={sizeNumber}/>,
      'mailchimp': <Mailchimp sizeNumber={sizeNumber}/>
  };

   return (
      <>
        {icons[name]}
      </>
      );
}

export default Icon;