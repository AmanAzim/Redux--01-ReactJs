import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/////for Redux///////
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; //for asynchronous actions // it is a middleware

//import reducer from './store/reducer'
import counterReducer from './store/reducers/counterReducer'
import storeResultsReducer from './store/reducers/storeResultsReducer'

//const store=createStore(reducer);

const rootReducer=combineReducers({ //combinening 2 reducers
    counterReducer:counterReducer,
    storeReducer:storeResultsReducer
});

const logger=(store)=>{
    return (next)=>{
        return (action)=>{
            console.log('[middleware] Dispatching', action);
            const result=next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const composeEnhencers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(rootReducer, composeEnhencers(applyMiddleware(logger, thunk)));

/////for Redux///////

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
