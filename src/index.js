import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// store feedback values

const feedbackReducer = (state = [], action) => {
    if(action.type === 'ADD_FEEDBACK'){
        state.feeling = action.payload;
    } if (action.type === 'ADD_UNDERSTANDING'){
        state.understanding = action.payload;
    } if (action.type === 'ADD_SUPPORT'){
        state.support === action.payload;
    }
    console.log('feeling:', state.feeling);
    console.log('understanding', state.understanding);
    console.log('support', state.support);
    console.log(state);
    
    return state;
}


const storeInstance = createStore(

    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
