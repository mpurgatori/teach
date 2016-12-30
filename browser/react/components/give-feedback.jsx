import React from 'react';
import {Link} from 'react-router';

export default function (props) {
console.log('This is props from prompts:',props);
return (
    <div className = "container" >
    <div>THIS IS WHERE A RESPONSE WILL RENDER</div>
    <div className="row">
      <div className="col-md-12">
          <div className="well well-sm">
              <form className="form-horizontal">
                  <fieldset>
                      <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                              <i className="fa fa-pencil-square-o bigicon"></i>
                          </span>
                          <div className="col-md-12">
                              <textarea className="form-control" id="message" name="message" placeholder="Write here" rows="7"></textarea>
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
