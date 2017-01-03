import { LOAD_COURSES } from '../constants';
import axios from 'axios';

export const receiveCourses = function (courses) {
  return {
    type: LOAD_COURSES,
    courses
  };
};

  export const loadCourses = () => {
    return dispatch => {
      axios.get(`/api/courses`)
        .then(response => {
          dispatch(receiveCourses(response.data));
        });
    };
  };
