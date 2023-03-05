export const fetchInventoryData=(data)=>{
    return({
        type:"FETCH_INVENTORY_DATA",
        payload:data
    });
}

export const postInventoryData=(data)=>{
    return({
        type:"POST_DATA",
        payload:data
    });
}

export const updateInventoryData=(data)=>{
    return({
        type:"UPDATE_DATA",
        payload:data
    });
}

export const deleteInventoryData=(data)=>{
    return({
        type:"DELETE_DATA",
        payload:data
    });
}


