import { loadCourses } from './courses-action';
import { LOAD_COURSES } from '../constants';



const initialState = {
    allCourses: []
  }


export default function(state = initialState, action){

  const newState = Object.assign({}, state);

  switch (action.type) {

    case LOAD_COURSES:
      newState.allCourses = action.courses;
      break;

    default:
      return state;
  }

  return newState;
}
