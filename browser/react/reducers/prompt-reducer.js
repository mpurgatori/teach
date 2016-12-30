import { loadPrompts } from './prompt-action';
import { LOAD_PROMPTS, ADD_REPLY } from './constants';




const initialState = {
    allPrompts: []
  }


export default function(state = initialState, action){

  const newState = Object.assign({}, state);

  switch (action.type) {

    case LOAD_PROMPTS:
      newState.allPrompts = action.prompts;
      break;

    case ADD_REPLY:
      newState.allPrompts = [...newState.allPrompts];
      let matchPrompt = newState.allPrompts.find(function(prompt){
        return prompt.id === action.reply.promptId
      })
      matchPrompt.replies = [...matchPrompt.replies, action.reply];
      break;

    default:
      return state;
  }
  return newState;
}
