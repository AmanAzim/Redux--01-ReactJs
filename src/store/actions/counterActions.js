import {ADD5, INCREMENT, SUBSTRACT5} from "./actionTypes";

export const increment=()=>{
    return{type:INCREMENT}
};

export const add5Counter=(addedVal)=>{
    return {type:ADD5, val:addedVal}
}

export const substract5Counter=(subVal)=>{
    return {type:SUBSTRACT5, val:subVal}
};
