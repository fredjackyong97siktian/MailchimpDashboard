
export const windowpopOpen = (myWindow:any,url: string) => {
    myWindow = window.open(url,'popUpWindow','height=500,width=500,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
    return myWindow;
}

export const windowpopStatus = (myWindow:any) => {
    if(!myWindow){
        return true
    }
    return myWindow.closed
}

export const windowpopClose = (myWindow:any) => {
    if(myWindow){
        myWindow.close();
    }  
}