import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';


export default class extends React.Component {

constructor(props){
  super(props)
  this.logOut = this.logOut.bind(this);

}

logOut(){
  this.props.logOut();
}

render(){
  const role = this.props.session.role
  return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {role &&
          <li>
            <a href ='#' onClick={this.logOut}>logout</a>
          </li>
          }
            <li className="sidebar-brand">
                <h1>
                    Teach
                </h1>
            </li>
            {!role &&
            <li>
              <Link to="/login">STUDENT LOGIN</Link>
            </li>
            }
            {!role &&
            <li>
              <Link to="/loginteach">TEACHER LOGIN</Link>
            </li>
            }
            {!role &&
            <li>
              <Link to="/signup">STUDENT SIGN UP</Link>
            </li>
            }
            {role==='student' &&
            <li>
              <Link to="/replywrite">WRITE</Link>
            </li>
            }
            {role==='student' &&
            <li>
              <Link to="/view">VIEW FEEDBACK</Link>
            </li>
            }
            {role==='teacher' &&
            <li>
              <Link to="/promptwrite">PROMPT CREATE</Link>
            </li>
            }
            {role==='teacher' &&
            <li>
              <Link to="/feedback">GIVE FEEDBACK</Link>
            </li>
            }
        </ul>
      </div>
    )
  }
}
