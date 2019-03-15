export const INCREMENT='INCREMENT';
export const ADD5= 'ADD5';
export const SUBSTRACT5='SUBSTRACT5';
export const STORE_RESULT= 'STORE_RESULT';
export const DELETE_RESULT= 'DELETE_RESULT';

export const increment=()=>{
    return{type:INCREMENT}
};

export const add5Counter=(addedVal)=>{
    return {type:ADD5, val:addedVal}
}

export const substract5Counter=(subVal)=>{
    return {type:SUBSTRACT5, val:subVal}
};

export const asyn_storeResult=(result)=>{
    return (dispatch)=>{
        setTimeout(()=>{ dispatch(storeResult(result)) }, 2000);
    }
};
export const storeResult=(result)=>{
    return{type:STORE_RESULT, result:result}
};

export const deleteResult=(id)=>{
    return{type:DELETE_RESULT, resultElemId:id}
}
