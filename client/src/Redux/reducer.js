
const data={
    inventoryData:[]
}

export const myReducer = (storeData=data,action)=>{
    switch(action.type){
        case "FETCH_INVENTORY_DATA":{
            return{
                ...storeData,inventoryData:action.payload
            }
        }
        case "POST_DATA":{
            return{
                ...storeData,inventoryData:[...storeData.inventoryData,action.payload]
            }
        }
        case "DELETE_DATA":{
            return{
                ...storeData,inventoryData:storeData.inventoryData.filter(el=>el._id !== action.payload)
            }
        }
        
        default:{
            return storeData
        }
    }
}