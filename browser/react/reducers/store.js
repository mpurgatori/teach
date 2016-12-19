import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer.js';
// import courseReducer from './course-reducer';
// import categoriesReducer from './categories-reducer';


import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));
