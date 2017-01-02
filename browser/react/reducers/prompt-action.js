import { LOAD_PROMPTS, ADD_PROMPT } from './constants';
import axios from 'axios';

export const receivePrompts = function (prompts) {
  return {
    type: LOAD_PROMPTS,
    prompts
  };
};


export const loadPrompts = () => {
  return dispatch => {
    axios.get(`/api/prompts`)
      .then(response => {
        dispatch(receivePrompts(response.data));
      });
  };
};

export const addPrompt = function (prompt) {
  return {
    type: ADD_PROMPT,
    prompt
  };
};


export const createPrompt = (content,categoryId,courseId) => {
  return dispatch => {
    axios.post('/api/prompts', {
      content,
      categoryId,
      courseId
    })
    .then(prompt => {
      dispatch(addPrompt(prompt))
    })
  }
}
