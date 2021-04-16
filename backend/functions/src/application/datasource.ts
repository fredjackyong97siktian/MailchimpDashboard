import {db} from './../intent/index';
const access = (o :any, k:any) => { return o[k] }

export const datasource = async(req : any)=>{
    console.log('datasource!!!!!!!!!!!!!!!!!!')
    console.log(req.query.authenticationId)
    if(req.query.authenticationId && req.query.name && req.query.apid && req.query.method){
        const query = (req.query as any)
        const email = 'Uds9El49yPv6ZvTNOWxPav93o'
        //req.user?.user_id
        const data = db.collection(email).doc(query.authenticationId).collection(query.name)
        .doc('/businessInformation/').collection('/ap_id/').doc(query.apid)
        .collection('/data/');
        let code;
        let businessInformation : any= [];
        switch(query.method){
            case 'single':
                code = await data.orderBy('timestamp','desc').limit(1).get()
                break;
            case 'multiple':
                code = await data.get()
                break;
        }    
        code.forEach((doc :any)=>{
            businessInformation.push(doc.data())
        });
    
        return businessInformation

    }else{
        throw "Not valid request"
    }   
}

export const selection = (data :any, dimensional : Array<string|number>)=>{
    let selection :Array<string> = [];
    data.map((item:any)=>{
        selection.push(dimensional.reduce(access,item))
    });

    return selection
}