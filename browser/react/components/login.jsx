import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  createUser(e) {
    e.preventDefault();
    axios.post('/api/users/login',{email:e.target.email.value, password:e.target.password.value})
    .then((login)=> browserHistory.push('/'))
    .catch(()=> this.props.router.transitionTo('/'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
