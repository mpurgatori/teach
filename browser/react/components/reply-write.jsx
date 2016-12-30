import React from 'react';
import {Link} from 'react-router';
import InsidePrompt from '../containers/inside-container.jsx';

export default function(props) {

  return (
      <div className = "container" >
        { props.prompts.filter(prompt => !prompt.replies.length).map(prompt => <InsidePrompt key={prompt.id} prompt={prompt} />) }
    </div>
  )
}
