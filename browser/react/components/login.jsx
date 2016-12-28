import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      dirty:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    //value = "Mike"
    const name = e.target.name;
    this.setState({
      [name]: value,
      dirty: true
    });
  }

  login(e) {
    e.preventDefault();
    axios.post('/api/sessions', {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => console.log(res.data))
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.login}>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
