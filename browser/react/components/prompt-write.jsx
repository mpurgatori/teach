import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

const initialState = {
  content:'',
  categoryId:'',
  courseId:'',
  dirty:false
}

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.promptSubmit = this.promptSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
      dirty: true
    });
  }

  promptSubmit(e) {
    e.preventDefault();
    if (this.state.content === ''||this.state.categoryId === ''||this.state.courseId === ''){
      return alert('Please fill out whole form');
    }
    this.props.createPrompt(this.state.content,this.state.categoryId,this.state.courseId);
    this.setState(initialState);
  }


  render() {
        return (
          <div className = "container" >
            <form className="form-horizontal" onSubmit={this.promptSubmit}>
              <fieldset>
          <div className="form-group">
            <label htmlFor="sel1">Select Course:</label>
            <select className="form-control" id="sel1" name='courseId' onChange={this.handleChange} value={this.state.courseId}>
              <option>Select Course</option>
              { this.props.courses.map(course => {
                return (
              <option key={course.name} value={course.id}>{course.name}</option>
                      )
                    })
                  }
            </select>

            <label htmlFor="sel2">Select Category:</label>
            <select className="form-control" id="sel2" name='categoryId' onChange={this.handleChange} value={this.state.categoryId}>
              <option>Select Category</option>
              { this.props.categories.map(category => {
                return (
              <option key={category.content} value={category.id}>{category.content}</option>
                      )
                    })
                  }
            </select>
        </div>
          <div className="row">
            <div className="col-md-12">
              <div className="well well-sm">
                <div className="form-group">
                  <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-pencil-square-o bigicon"></i>
                  </span>
                  <div className="col-md-12">
                      <textarea className="form-control" id="message" name="content" value={this.state.content} onChange={this.handleChange} placeholder="Write here" rows="7"></textarea>
                  </div>
                </div>
                  <div className="form-group">
                      <div className="col-md-12 text-center">
                          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                      </div>
                  </div>
                </div>
            </div>
          </div>
            </fieldset>
          </form>
      </div>
    )
  }
}
