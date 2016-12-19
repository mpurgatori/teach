import React, { Component } from 'react';
//import axios from 'axios';
import {browserHistory} from 'react-router';


class Signup extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.createUser = this.createUser.bind(this);
  }

  createUser(e) {

    e.preventDefault();
    axios.post('/api/users/',{email:e.target.email.value, password:e.target.password.value})
    .then((login)=> browserHistory.push('/'))
    .catch(()=> this.props.router.transitionTo('/'))
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Signup</h1>
          <form onSubmit={this.createUser}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmation_password">Confirm Password</label>
              <input type="password" className="form-control" id="confirmation_password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
