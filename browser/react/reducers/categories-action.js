import { LOAD_CATEGORIES } from './constants';
import axios from 'axios';

export const receiveCategories = function (categories) {
  return {
    type: LOAD_CATEGORIES,
    categories
  };
};


  export const loadCategories = () => {
    return dispatch => {
      axios.get(`/api/categories`)
        .then(response => {
          dispatch(receiveCategories(response.data));
        });
    };
  };
