import {selection} from './../datasource';

export const access = (o :any, k:any) => { return o[k] }

//Get Selection


//Get Campaign
export const MailChimpFilter = (data :any , dimensionalReport : Array<string|number>, dimensionalData : Array<string|number>, dimensionalSelection: Array<string|number>, selection: string)=>{
    let returnData :any= [];
    let selectionList : Array<string> = [];
    data.map((item :any)=>{
        //let link = item.businessInformation.data.campaign.reports;
        let link = dimensionalReport.reduce(access,item)
        if(link.length > 0){
            let yData : number = 0;
            link.map((item:any)=>{
                let value = dimensionalData.reduce(access,item);
                let name = dimensionalSelection.reduce(access,item);
                console.log('haha')
                console.log(value)
                if(value >= 0 && (selection === name || selection === "all")){
                    yData = yData + value;
                    
                    console.log(name)
                    !selectionList.includes(name) && selectionList.push(name)
                }
            })
            yData=yData/link.length
            returnData.push({x:item.timestamp,y:yData});
        }
    })
    console.log(`SELECTION ${selectionList}`)
    return {selectionList,returnData};
}

