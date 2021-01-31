import { SetStateAction } from 'react';

//adjusting nav open and close
export interface DrawerSetting {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
   
    // setValuesList: (val: number[]) => void  will also satisfy, but it is
    // better to be explict and pass React.Dispatch<SetStateAction<number[]>>
}

//component of the drawer open and close
export interface DrawerSettingComponent {
    item: {tag : string , icon : any}
}