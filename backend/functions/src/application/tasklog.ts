
interface ParameterI{
    path:any,
    category:string,
    detail: string,
    otherDetail ?: object | null
}

export const tasklogRecord = async({path,category,detail,otherDetail}:ParameterI) => {

    await path.set({
        category:category,
        detail:detail,
        otherDetail:otherDetail
    })
}