export const TemplateMonth = (num: number) => {
    let month = new Array(12)
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    return month[num]
}

export const TemplateDay = (num: number) => {
    let weekday = new Array(12)
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[num]
}

//Filter Date/Month/Year can get the latest date
/*the functionality of month and year yet to developed */
export const filterDateArray = (arr : Array<{x:Date,y:any}>) => {
    let tmp :any = {};

    arr.forEach((item : {x:Date,y:any}) =>{
      const d = new Date(item.x);
      const yr = (d.getFullYear()).toString();
      const mo = (d.getMonth()).toString();
      const day = (d.getDate()).toString();

      tmp[yr +'' + mo + '' + day] = item; // will overwrite prior same date
    });

    return Object.keys(tmp).map((key)=>{
      return tmp[key];
    });
    
 }