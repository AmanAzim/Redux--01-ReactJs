import * as actionTypes from "./actionTypes";


export const asyn_storeResult=(result)=>{
    return (dispatch, getState)=>{
        const oldCounter=getState().counterReducer.counter;
        console.log('oldCounter:'+oldCounter);
        setTimeout(()=>{ dispatch(storeResult(result)) }, 2000);
    }
};
export const storeResult=(result)=>{
    const updatedResult=result*2; //we can do such synchronous operations here
    return{type:actionTypes.STORE_RESULT, result: updatedResult}
};


export const deleteResult=(id)=>{
    return{type:actionTypes.DELETE_RESULT, resultElemId:id}
}
