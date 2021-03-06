import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer.js';


import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));
