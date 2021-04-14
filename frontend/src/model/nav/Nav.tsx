import { SetStateAction } from 'react';

//adjusting nav open and close
export interface DrawerSetting {
    open: boolean ;
    setOpen: React.Dispatch<SetStateAction<boolean>> ;
    variant ?: "permanent" | "temporary" | undefined,
    // setValuesList: (val: number[]) => void  will also satisfy, but it is
    // better to be explict and pass React.Dispatch<SetStateAction<number[]>>
}

export interface NavTopI {
    nav : DrawerSetting ,
    type : string,

}

export interface ListHandleI {
    favourite: boolean,
    dashboard: boolean,
    application: boolean
}

//component of the drawer open and close
export interface DrawerSettingComponent {
    item: {tag : string , icon : any,api:string,     list:string,},
    listHandle : ListHandleI,
    onSetListHandle : (list:string ,open:boolean          ) => void
}