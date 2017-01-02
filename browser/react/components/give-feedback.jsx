import React from 'react';
import {Link} from 'react-router';
import InsideFeedback from '../containers/inside-feedback-container.jsx';

export default function(props) {
  return (
      <div className = "container" >
        { props.replies.filter(reply => !reply.feedback).map(reply => <InsideFeedback key={reply.id} reply={reply} />) }
    </div>
  )
}
