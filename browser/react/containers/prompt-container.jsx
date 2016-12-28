import { connect } from 'react-redux';
import PromptWrite from '../components/prompt-write.jsx';
import {receiveCourses} from '../reducers/courses-action';
import {receiveCategories } from '../reducers/categories-action';


const mapStateToProps = function(state, ownProps) {
    return {
        courses: state.courses.allCourses,
        categories: state.categories.allCategories
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
}




export default connect(mapStateToProps, mapDispatchToProps)(PromptWrite);
