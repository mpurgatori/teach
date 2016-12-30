import React from 'react';
import {Link} from 'react-router';

export default function (props) {
console.log('This is props from the REPLY VIEW CONTAINER:', props.replies);
return (
    <div className = "container" >
      { props.replies.map( reply=>{
        return (
          <div key={reply.id}>{reply.content}</div>
          )
      }) }
  </div>
  )
}
