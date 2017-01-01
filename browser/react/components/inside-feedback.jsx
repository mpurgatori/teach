import React from 'react';


export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      feedback: '',
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.replySubmit = this.replySubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      content: value,
      dirty: true
    });
  }


  replySubmit(e) {
    console.log('!^!^!^!^!^!^', this.props);
    e.preventDefault();
    this.props.updateReply(this.props.reply.id, this.state.feedback);
  }

  render(){
    console.log('THIS.PROPS FROM INSIDE FEEDBACK', this.props);
    return (
    <div>
      <div>{this.props.reply.content}</div>
      <div className="row">
        <div className="col-md-12">
          <div className="well well-sm">
            <form className="form-horizontal" onSubmit={this.replySubmit}>
              <fieldset>
                  <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                          <i className="fa fa-pencil-square-o bigicon"></i>
                      </span>
                      <div className="col-md-12">
                          <textarea onChange={this.handleChange} className="form-control" id="message" name="message" placeholder="Write here" rows="7"></textarea>
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-md-12 text-center">
                          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                      </div>
                  </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
            )
  }
}
