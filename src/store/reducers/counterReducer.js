import * as ActionType from '../actions/actions'

const initialState={
    counter:0,
};

const CounterReducer=(state=initialState, action)=>{

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

    }

    return state;
}

export default CounterReducer;
