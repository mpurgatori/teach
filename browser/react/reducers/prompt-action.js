import { LOAD_PROMPTS } from './constants';
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
