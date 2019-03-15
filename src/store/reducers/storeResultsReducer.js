import * as ActionType from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState={
    results:[]
};

const storeResultReducer=(state=initialState, action)=>{

    switch(action.type){

        case ActionType.STORE_RESULT:
            //we can perform any synchronous operations on the data here
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result}) //push() touches the original array but concat() returns a new array which is immutable way of updating a array
            }
        case 'DELETE_RESULT':
            //const id=2;
            //const newArray=[...state.results]; //copying the array immutably
            //newArray.splice(id, 1);//remove 1 item form the index of "id"
            const newArray=state.results.filter(result=> result.id!==action.resultElemId); //returns a new array excluding the item we want to remove. we identify the irme with its "id" which is represented here as "resultElemId"
            return updateObject(state,{results: newArray});
    }

    return state;
}

export default storeResultReducer;
