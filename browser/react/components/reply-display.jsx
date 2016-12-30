import React from 'react';
import {Link} from 'react-router';

export default function (props) {
console.log('This is props from the REPLY VIEW CONTAINER:', props.replies);
return (
    <div className = "container" >
      { props.replies.map( reply=>{
        return (
          <div key={reply.id}>
          <h3>Q. {reply.prompt.content}</h3>
          <h3>A. {reply.content}</h3>
          </div>
          )
      }) }
  </div>
  )
}
