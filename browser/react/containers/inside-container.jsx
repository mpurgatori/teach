import { connect } from 'react-redux';
import { createReply } from '../reducers/reply-action';
import InsidePrompt from '../components/inside-prompt.jsx'
import { bindActionCreators } from 'redux';

const mapStateToProps = function(state, ownProps) {
    return {

    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
      createReply: bindActionCreators(createReply, dispatch)
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(InsidePrompt);
