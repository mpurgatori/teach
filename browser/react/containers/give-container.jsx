import { connect } from 'react-redux';
import GiveFeedback from '../components/give-feedback.jsx';
import {loadReplyTeach} from '../reducers/reply-action';



const mapStateToProps = function(state, ownProps) {
    console.log('THIS IS THE STATE', state)
    return {
        replies: state.replies.allReplies
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
}




export default connect(mapStateToProps, mapDispatchToProps)(GiveFeedback);
