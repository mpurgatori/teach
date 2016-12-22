import { loadPrompts } from './prompt-action';
import { LOAD_PROMPTS } from './constants';



const initialState = {
    allPrompts: []
  }


export default function(state = initialState, action){

  const newState = Object.assign({}, state);

  switch (action.type) {

    case LOAD_PROMPTS:
      newState.allPrompts = action.prompts;
      break;

    default:
      return state;
  }
  return newState;
}
