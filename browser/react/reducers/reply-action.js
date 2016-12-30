import { ADD_REPLY, LOAD_REPLIES } from './constants';
import axios from 'axios';

export const addReply = function (reply) {
  return {
    type: ADD_REPLY,
    reply
  };
};


  export const createReply = (promptId, replyContent) => {
    return dispatch => {
      axios.post('/api/replies', {
        promptId,
        replyContent
      })
      .then(res => dispatch(addReply(res.data)))
    };
  };

  export const loadReply = function(reps) {
    return {
      type: LOAD_REPLIES,
      reps
    }
  };


  export const loadReplies = () => {
    return dispatch => {
      axios.get('/api/replies')
        .then(response => {
          dispatch(loadReply(response.data));
        });
    };
  };
