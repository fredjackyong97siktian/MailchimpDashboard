const util = require('util')
export const findMinMaxY = (arr: any) =>{
  console.log('renderme AGAIN!!!! MINMAX')
    if(!arr || typeof arr == undefined){
      return [0,1];
    }
    console.log(util.inspect(arr, {showHidden: false, depth: null}))
    let min :number = arr[0].y, max :number=arr[0].y;
    for (let i = 0, len=arr.length; i < len; i++) {
      let v = arr[i].y;
      min = (v < min) ? v : min;
      max = (v > max) ? v : max;
    }
    
    max = max + 20;
    min - 30 < 0 ? min = 0 : min = min - 30;
    
    return [min, max];
}

export const findMinMaxDate = (arr:any)=>{
  console.log('renderme AGAIN!!!! Date')
  if(!arr || typeof arr == undefined){
    return [new Date(),new Date()]
  }

  if(arr.length  === 1){
    const date  = new Date(arr[0].x);
    const yesterday = new Date(date.setDate(date.getDate()-1))
    const tomorrow = new Date(date.setDate(date.getDate()+2))
    console.log(`yesterday ${yesterday} , tomorrow ${tomorrow}`)
    return [yesterday,tomorrow]
  }

  if(arr.length === 2){
    const f_date  = new Date(arr[0].x);
    const s_date = new Date(arr[1].x)
    const yesterday = new Date(f_date.setDate(f_date.getDate()-1))
    const tomorrow = new Date(s_date.setDate(s_date.getDate()+1))
    console.log(`yesterday ${yesterday} , tomorrow ${tomorrow}`)
    return [yesterday,tomorrow]
  }

    var date=[];
    for (let i = 0, len=arr.length; i < len; i++) {
        date.push(arr[i].x);
      }
    var maxDate=new Date(Math.max.apply(null,date));
    var minDate=new Date(Math.min.apply(null,date));

    return [minDate,maxDate]
}