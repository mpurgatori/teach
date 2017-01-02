import { createReply, loadReplies, loadReply, loadReplyTeach, loadRepliesTeach, updateReplies, updateReply } from './reply-action';

import { ADD_REPLY, LOAD_REPLIES, LOAD_TEACH_REPS, UPDATE_REPLY } from './constants';



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

    case LOAD_TEACH_REPS:
      newState.allReplies = action.reps;

      break;

    case UPDATE_REPLY:
      newState.allReplies = [...newState.allReplies];
      newState.allReplies.find(reply => action.reply.id === reply.id).feedback = action.reply.feedback;

      break;

    default:
      return state;
  }
  console.log('THIS IS THE NEWSTATE COMING OUT OF REPLY REDUCER:', newState);
  return newState;
}
