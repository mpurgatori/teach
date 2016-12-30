import React from 'react';
import {Link} from 'react-router';

export default function (props) {
console.log('This is props from the REPLY VIEW CONTAINER:',props);
return (
    <div className = "container" >
      props.replies.map(reply=>{
        <div key={reply.id}>
          <div>{reply.content}</div>
        </div>
      })
  </div>
  )
}
