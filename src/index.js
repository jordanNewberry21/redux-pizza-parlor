import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Pizza reducer
const pizzaReducer = (state = [], action) => {
    if (action.type === 'SEND_PIZZA') {
        return action.payload
    }
    return state;
}

//checkout reducer
const checkoutReducer = (state=[], action) => {
    if (action.type === 'CHECKOUT_PIZZA'){
        return [...state, action.payload]
    } 
    if (action.type === 'CHECKOUT_PIZZA') { 
        return state 
    }
    return state;
}

//client reducer
const clientReducer = (state=[], action) => {
    if (action.type === 'ADD_ORDER'){
        return action.payload
    }
    return state;
}


// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        checkoutReducer,
        clientReducer
    }),
    applyMiddleware(logger),
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));