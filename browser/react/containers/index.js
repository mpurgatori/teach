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
import loginTeach from '../components/login-teacher.jsx'
import Signup from '../components/signup.jsx'
import View from './reply-display-container.jsx'
import promptWrite from './prompt-container.jsx'
import replyWrite from './reply-container.jsx'
import giveFeedback from '../components/give-feedback.jsx'
import enroll from '../components/enroll.jsx'



import { receiveCourses, loadCourses } from '../reducers/courses-action';
import { receiveCategories, loadCategories } from '../reducers/categories-action';
import { receivePrompts, loadPrompts } from '../reducers/prompt-action';
import { loadReply, loadReplies } from '../reducers/reply-action';


const onPromptEnter = function (){
  store.dispatch(loadCourses());
	store.dispatch(loadCategories());
};


const onReplyEnter = function (){
	store.dispatch(loadPrompts());
};

const onViewEnter = function(){
  store.dispatch(loadReplies());
}

const loginCheck = function (){

}
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
    <Route path="/loginteach" component={loginTeach}/>
		<Route path="/signup" component={Signup}/>
    <Route path="/view" component={View} onEnter={onViewEnter}/>
		<Route path="/replywrite" component={replyWrite} onEnter={onReplyEnter}/>
		<Route path="/promptwrite" component={promptWrite} onEnter={onPromptEnter}/>
    <Route path="/feedback" component={giveFeedback}/>
    <Route path="/enroll" component={enroll}/>
	</Route>
	</Router>
</Provider>, document.getElementById('app')
)
