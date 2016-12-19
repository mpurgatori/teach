import React from 'react';
import {Link} from 'react-router';

export default function (props) {
console.log('THIS IS THE PROPS',props);
        return (
        <div className = "container" >
          <div className="form-group">
      <label htmlFor="sel1">Select Course:</label>
      <select className="form-control" id="sel1">
        { props.courses.map(course => {
          return (
            <option key={course.course}>{course.course}</option>
         )
       })
     }
      </select>

      <label htmlFor="sel2">Select Category:</label>
      <select className="form-control" id="sel2">
        { props.categories.map(categories => {
          return (
            <option key={categories.content}>{categories.content}</option>
         )
       })
     }
      </select>

    </div>
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

// <ul className="list-unstyled">
//           { props.puppies.map(puppy => {
//             return (
//               <div key={puppy.name}>
//             <li><Link to= {`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
//             </div>
//            )
//          })
//        }
//      </ul>
