'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect, browserHistory} from 'react-router';
import axios from 'axios';

import store from '../reducers/store';
import { Provider } from 'react-redux';

import Main from './main.jsx'
import Sidebar from '../components/sidebar.jsx'
import Login from '../components/login.jsx'
import Signup from '../components/signup.jsx'
import replyWrite from '../components/reply-write.jsx'
import promptWrite from './prompt-container.jsx'


import { receiveCourses, loadCourses } from '../reducers/courses-action';
import { receiveCategories, loadCategories } from '../reducers/categories-action';


const onPromptEnter = function (){
  store.dispatch(loadCourses());
	store.dispatch(loadCategories());
};

// const onPromptEnter = function () {
//   Promise.all([
//     axios.get('/api/courses'),
//     axios.get('/api/categories'),
//
//   ])
//     .then(responses => responses.map(r => r.data))
//     .then(([courses, categories]) => {
//       store.dispatch(receiveCourses(courses));
//       store.dispatch(receiveCategories(categories));
//     });
//
// };
//




ReactDOM.render(
	<Provider store={store}>
	<Router history={browserHistory}>  
	<Route path="/" component={Main}>
		<Route path="/login" component={Login}/>
		<Route path="/signup" component={Signup}/>
		<Route path="/replywrite" component={replyWrite}/>
		<Route path="/promptwrite" component={promptWrite} onEnter={onPromptEnter}/>
	</Route>
	</Router>
</Provider>, document.getElementById('app')
)
