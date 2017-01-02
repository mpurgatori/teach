import { connect } from 'react-redux';
import SideBar from '../components/sidebar.jsx'
import { destroySession } from '../reducers/session-action'
import { bindActionCreators } from 'redux';


const mapStateToProps = function(state, ownProps) {
  return {
    session: state.session
  }
}


const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    logOut: bindActionCreators(destroySession, dispatch)
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
