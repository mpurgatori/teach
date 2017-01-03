import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {
  constructor(props){
    super(props)
    this.remReply = this.remReply.bind(this);
  }

remReply(e){
  e.preventDefault();
  const rId = e.target.attributes[0].value;
  console.log('attribute value', e.target.value);
  this.props.removeReply(rId);
}

render(){
  console.log('!%!%!%!', this.props);

  return (
      <div className = "container" >
        { this.props.replies.map( reply=>{
          return (
            <form key={reply.id} value={reply.id} onSubmit={this.remReply}>
            <h3>{reply.prompt.course.name}</h3>
            <h4>Q: {reply.prompt.content}</h4>
            <h4>A: {reply.content}</h4>
            <h4>Feedback: {reply.feedback}</h4>
            <button type='submit' className="btn btn-xs btn-danger">Delete</button>
            <br/>
            </form>
            )
        })
      }
    </div>
    )
  }
}
