import { connect } from 'react-redux';
import { updateReply } from '../reducers/reply-action';
import InsideFeedback from '../components/inside-feedback.jsx'
import { bindActionCreators } from 'redux';

const mapStateToProps = function(state, ownProps) {
    return {

    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
      updateReply: updateReply

  };
}




export default connect(mapStateToProps, mapDispatchToProps)(InsideFeedback);
