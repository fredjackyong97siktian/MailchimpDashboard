var myWindow : any;
export const windowpopOpen = (url: string) => {
    myWindow = window.open(url,'popUpWindow','height=500,width=500,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}

export const windowpopStatus = () => {
    if(!myWindow){
        return true
    }
    return myWindow.closed
}

export const windowpopClose = () => {
    myWindow.close();
}