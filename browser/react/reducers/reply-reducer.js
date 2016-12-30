import { createReply, loadReplies, loadReply } from './reply-action';
import { ADD_REPLY, LOAD_REPLIES } from './constants';



const initialState = {
    allReplies: []
  }


export default function(state = initialState, action){

  const newState = Object.assign({}, state);

  switch (action.type) {

    case ADD_REPLY:
      newState.allReplies = [...newState.allReplies, action.reply];

      break;

    case LOAD_REPLIES:
      newState.allReplies = action.reps;

      break;

    default:
      return state;
  }
  return newState;
}
