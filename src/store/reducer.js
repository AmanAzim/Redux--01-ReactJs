const initialState={
    counter:0,
    results:[]
};

const reducer=(state=initialState, action)=>{

    switch(action.type){
        case 'INCREMENT':
            const newState=Object.assign({}, state); //long way of copying state properties immutably
            newState.counter=state.counter+1;
            return newState;
        case 'DECREMENT':
            return{
                ...state, ////short way of copying state properties immutably
                counter:state.counter-1
            }
        case 'ADD5':
            return{
                ...state,
                counter:state.counter+action.val
            }
        case 'SUBSTRACT5':
            return{
                ...state,
                counter:state.counter-action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}) //push() touches the original array but concat() returns a new array which is immutable way of updating a array
        }
    }

    return state;
}

export default reducer;
