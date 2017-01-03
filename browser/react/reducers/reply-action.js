import { ADD_REPLY, LOAD_REPLIES, LOAD_TEACH_REPS, UPDATE_REPLY, DELETE_REPLY } from '../constants';
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



  export const loadReplyTeach = function(reps) {
    return {
      type: LOAD_TEACH_REPS,
      reps
    }
  };


  export const loadRepliesTeach = () => {
    return dispatch => {
      axios.get('/api/replies/teacher')
        .then(response => {
          dispatch(loadReplyTeach(response.data));
        });
    };
  };

export const updateReply = function (reply) {
  return {
    type: UPDATE_REPLY,
    reply
  };
};

export const updateReplies = (id, feedback) => {
  const reply = {
    id,
    feedback
  };
  return dispatch => {
    axios.put('/api/replies', reply)
    .then(()=> {
      dispatch(updateReply(reply))
    })
  };
}


export const deleteReply = function (reply) {
  return {
    type: DELETE_REPLY,
    reply
  };
};

export const removeReply = (replyId) => {
  return dispatch => {
    axios.delete('/api/replies', { repId: replyId})
    .then( reply => {
      dispatch(deleteReply(reply))
    })
  };
}
