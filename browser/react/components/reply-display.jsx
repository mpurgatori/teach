import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  console.log('!%!%!%!', props);
return (
    <div className = "container" >
      { props.replies.map( reply=>{
        return (
          <div key={reply.id}>
          <h3>{reply.prompt.course.name}</h3>
          <h4>Q: {reply.prompt.content}</h4>
          <h4>A: {reply.content}</h4>
          <h4>Feedback: {reply.feedback}</h4>
          <br/>
          </div>
          )
      })
    }
  </div>
  )
}
