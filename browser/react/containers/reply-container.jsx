import { connect } from 'react-redux';
import ReplyWrite from '../components/reply-write.jsx';
import {receivePrompts} from '../reducers/prompt-action';



const mapStateToProps = function(state, ownProps) {
    console.log('THIS IS THE STATE', state)
    return {
        prompts: state.prompts.allPrompts
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
}




export default connect(mapStateToProps, mapDispatchToProps)(ReplyWrite);
