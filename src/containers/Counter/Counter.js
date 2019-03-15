import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as ActionType from '../../store/actions/actions';
import {increment, add5Counter, substract5Counter, asyn_storeResult, deleteResult} from '../../store/actions/actions'; //importing the action creator functions
import * as actionCreator from '../../store/actions/actions'; //importing the action creator functions

class Counter extends Component {


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract5Counter}  />
                <hr></hr>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map( result=>{
                        return  <li key={result.id} style={{cursor:'pointer'}} onClick={()=>this.props.onDeleteResult(result.id)}>{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{ //this state is coming from global Redux state of reducer.js
    return {
        //ctr: state.counter, //these two were for the single global reducer
        //storedResults:state.results
        ctr: state.counterReducer.counter,
        storedResults:state.storeReducer.results
    };
};

const mapDispatchToProps=(dispatch)=>{ //To manipulate the global state with dispatch. // "dispatch" is coming form global Redux state of reducer.js
        return {
            //onIncrementCounter:()=>dispatch({type:ActionType.INCREMENT}),
            onIncrementCounter:()=>dispatch(increment()), //increment() is an action creator function which we have implemented in actions.js file //"onIncrementCounter" is the name of the function we will use in this component to manipulate the redux state

            onDecrementCounter:()=>dispatch({type:'DECREMENT'}),

            //onAdd5Counter:()=>dispatch({type:ActionType.ADD5, val:5}),
            onAdd5Counter:()=>dispatch(add5Counter(5)),

           //onSubstract5Counter:()=>dispatch({type:'SUBSTRACT5', val:5}),
            onSubstract5Counter:()=>dispatch(substract5Counter(5)),

            //onStoreResult:(result)=>dispatch({type:ActionType.STORE_RESULT, result:result}),
            onStoreResult:(result)=>dispatch(asyn_storeResult(result)),

            //onDeleteResult:(id)=>dispatch({type:'DELETE_RESULT', resultElemId:id}),
            onDeleteResult:(id)=>dispatch(actionCreator.deleteResult(id)), //just tried "actionCreator" as object to import a function from that file
        };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //connect allow us to access the "ctr" of "mapStateToProps" in Counter.js
