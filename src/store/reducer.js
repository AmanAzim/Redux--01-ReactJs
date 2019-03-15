import * as ActionType from './actions/actionTypes'

const initialState={
    counter:0,
    results:[]
};

const reducer=(state=initialState, action)=>{

    switch(action.type){
        case ActionType.INCREMENT:
            const newState=Object.assign({}, state); //long way of copying state properties immutably
            newState.counter=state.counter+1;
            return newState;
        case 'DECREMENT':
            return{
                ...state, ////short way of copying state properties immutably
                counter:state.counter-1
            }
        case ActionType.ADD5:
            return{
                ...state,
                counter:state.counter+action.val
            }
        case 'SUBSTRACT5':
            return{
                ...state,
                counter:state.counter-action.val
            }
        case ActionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}) //push() touches the original array but concat() returns a new array which is immutable way of updating a array
        }
        case 'DELETE_RESULT':
            //const id=2;
            //const newArray=[...state.results]; //copying the array immutably
            //newArray.splice(id, 1);//remove 1 item form the index of "id"
            const newArray=state.results.filter(result=> result.id!==action.resultElemId); //returns a new array excluding the item we want to remove. we identify the irme with its "id" which is represented here as "resultElemId"
            return {
                ...state,
                results: newArray
            }
    }

    return state;
}

//export default reducer;
