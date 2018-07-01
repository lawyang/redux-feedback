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
    }
    
    
    
    console.log('feedback reducer', state);
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
