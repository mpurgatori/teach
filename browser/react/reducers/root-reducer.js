import { combineReducers } from 'redux';
import courses from './course-reducer';
import categories from './categories-reducer';
import prompts from './prompt-reducer';


export default combineReducers({
  courses,
  categories,
  prompts
});
