import { connect } from 'react-redux';
import ReplyDisplay from '../components/reply-display.jsx';
import { removeReply } from '../reducers/reply-action';

import { bindActionCreators} from 'redux';



const mapStateToProps = function(state, ownProps) {
    return {
        replies: state.replies.allReplies
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    removeReply: bindActionCreators(removeReply, dispatch)
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(ReplyDisplay);
