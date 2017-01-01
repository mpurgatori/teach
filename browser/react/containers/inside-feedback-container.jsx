import { connect } from 'react-redux';
import { updateReplies, loadReplies } from '../reducers/reply-action';
import InsideFeedback from '../components/inside-feedback.jsx'
import { bindActionCreators } from 'redux';

const mapStateToProps = function(state, ownProps) {
    return {

    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    updateReply: bindActionCreators(updateReplies, dispatch)
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(InsideFeedback);
