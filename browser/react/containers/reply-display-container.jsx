import { connect } from 'react-redux';
import ReplyDisplay from '../components/reply-display.jsx';
import { loadReply } from '../reducers/reply-action';



const mapStateToProps = function(state, ownProps) {
  console.log('THIS IS STATE IN REPLY CONTAINER', state);
    return {
        replies: state.replies.allReplies
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
}




export default connect(mapStateToProps, mapDispatchToProps)(ReplyDisplay);