import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
//npm i redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);