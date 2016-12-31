import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {

render(){
  return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <h1>
                    Teach
                </h1>
            </li>
            <li>
              <Link to="/login">STUDENT LOGIN</Link>
            </li>
            <li>
              <Link to="/loginteach">TEACHER LOGIN</Link>
            </li>
            <li>
              <Link to="/signup">STUDENT SIGN UP</Link>
            </li>
            <li>
              <Link to="/replywrite">WRITE</Link>
            </li>
            <li>
              <Link to="/view">VIEW FEEDBACK</Link>
            </li>
            <li>
              <Link to="/promptwrite">PROMPT CREATE</Link>
            </li>
            <li>
              <Link to="/feedback">GIVE FEEDBACK</Link>
            </li>
        </ul>
      </div>
    )
  }
}
