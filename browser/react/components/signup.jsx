import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last:'',
      email:'',
      password:'',
      dirty: false
    };

    this.createUser = this.createUser.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  createUser(e) {

    e.preventDefault();
    axios.post('/api/students/', this.state)
    //.then(res => res.data)
    .then(()=> browserHistory.push('/login'));
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
      dirty: true
    });
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Student Signup</h1>
          <form onSubmit={this.createUser}>
            <div className="form-group">
              <label htmlFor="first">First name</label>
              <input type="first" name="first" value={this.state.first} className="form-control"
              id="first" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter first name" />
            </div>
            <div className="form-group">
              <label htmlFor="last">Last name</label>
              <input type="last" name="last"
              value={this.state.last}
              className="form-control" id="last"
              onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter last name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email"
              value={this.state.email} className="form-control" id="email"
              onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" id="password"
              value={this.state.password}
              onChange={this.handleChange} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
