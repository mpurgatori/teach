import React from 'react';
import {Link} from 'react-router';
import InsideFeedback from '../components/inside-feedback.jsx';

export default function(props) {
console.log('PROPS COMING FROM GIVE FEEDBACK', props);
  return (
      <div className = "container" >
        { props.replies.filter(reply => !reply.feedback).map(reply => <InsideFeedback key={reply.id} reply={reply} />) }
    </div>
  )
}
