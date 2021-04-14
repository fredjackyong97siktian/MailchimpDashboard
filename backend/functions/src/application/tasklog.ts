
interface ParameterI{
    path:any,
    category:string,
    detail: string,
    otherDetail ?: object | null
}

export const tasklogRecord = async({path,category,detail,otherDetail}:ParameterI) => {

    await path.set({
        timestamp: new Date().toUTCString(),
        category:category,
        detail:detail,
        otherDetail:otherDetail
    })
}