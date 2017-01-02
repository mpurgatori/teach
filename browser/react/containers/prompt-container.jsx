import { connect } from 'react-redux';
import PromptWrite from '../components/prompt-write.jsx';
import {receiveCourses} from '../reducers/courses-action';
import {receiveCategories } from '../reducers/categories-action';
import { createPrompt } from '../reducers/prompt-action';

import { bindActionCreators } from 'redux';

const mapStateToProps = function(state, ownProps) {
    return {
        courses: state.courses.allCourses,
        categories: state.categories.allCategories
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    createPrompt: bindActionCreators(createPrompt, dispatch)
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(PromptWrite);
