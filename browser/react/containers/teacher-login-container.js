import { connect } from 'react-redux';
import LogIn from '../components/login-teacher.jsx'
import { getSession } from '../reducers/session-action.js';

import { bindActionCreators } from 'redux';

const mapStateToProps = function(state, ownProps) {
  return {}
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    getSession: bindActionCreators(getSession, dispatch)
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
