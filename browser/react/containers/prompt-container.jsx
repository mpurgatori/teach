import { connect } from 'react-redux';
import PromptWrite from '../components/prompt-write.jsx';
import {receiveCourses} from '../reducers/courses-action';
import {receiveCategories } from '../reducers/categories-action';


const mapStateToProps = function(state, ownProps) {
    console.log('THIS IS THE STATE', state)
    return {
        courses: state.allCourses,
        categories: state.allCategories
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
}




export default connect(mapStateToProps, mapDispatchToProps)(PromptWrite);
