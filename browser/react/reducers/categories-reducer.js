import { loadCategories } from './categories-action';
import { LOAD_CATEGORIES } from './constants'



const initialState = {
    allCategories: []
  }


export default function (state = initialState, action){

  const newState = Object.assign({}, state);

  switch (action.type) {

    case LOAD_CATEGORIES:
      newState.allCategories = action.categories;
      break;

    default:
      return state;
  }
  return newState;
}
