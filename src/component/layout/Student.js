

import React from 'react';
import {Link} from "react-router-dom";
import { useFirestoreConnect } from "react-redux-firebase";
const Student = () => {
  useFirestoreConnect([
    {
      collection:"students",
    },
  ]);
    return (
        <div className="container">
  <div className="py-4">
    <div className="row">
     {
         new Array(12).fill("").map((item, index)=>(

            <div className="col-lg-3 col-md-6 mb-4" key="index">
  <div className="card shadow text-center py-4">
   <p>profile image</p>
    <div className="card-body">
      <h5 className="card-title mb-0">Student Name</h5>
      <p className="text-muted small">Student E-mail</p>
      <Link href="!#" className="btn btn-primary btn-profile">
        View Profile
      </Link>
      <button className="btn btn-edit">
      <span class="glyphicon glyphicon-remove"></span>
      </button>
      <button className="btn btn-edit">
      <Link to={`/StudentForm/${index}`} class="glyphicon glyphicon-edit"></Link>
      </button>
    </div>
  </div>
</div>


         ))
     }
    </div>
  </div>
</div>
    )
}

export default Student
