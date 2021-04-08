export const findMinMaxY = (arr: any) =>{
  console.log('renderme AGAIN!!!! MINMAX')
    let min = arr[0].y, max=arr[0].y;
    for (let i = 0, len=arr.length; i < len; i++) {
        let v = arr[i].y;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
      }
    
    return [min, max];
}

export const findMinMaxDate = (arr:any)=>{
  console.log('renderme AGAIN!!!! Date')
    var date=[];
    for (let i = 0, len=arr.length; i < len; i++) {
        date.push(arr[i].x);
      }
    var maxDate=new Date(Math.max.apply(null,date));
    var minDate=new Date(Math.min.apply(null,date));

    return [minDate,maxDate]
}