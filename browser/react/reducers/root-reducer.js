import { combineReducers } from 'redux';
import courses from './course-reducer';
import categories from './categories-reducer';


export default combineReducers({
  courses,
  categories
});
