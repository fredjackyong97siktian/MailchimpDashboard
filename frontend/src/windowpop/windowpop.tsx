export const windowpopOpen = (url: string) => {
    window.open(url,'popUpWindow','height=500,width=500,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}

export const windowpopStatus = () => {
    if(!window){
        return true
    }
    return window.closed
}

export const windowpopClose = () => {
    if(window){
        window.close();
    }

}