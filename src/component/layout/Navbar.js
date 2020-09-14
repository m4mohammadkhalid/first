import React from 'react'

//import { Link } from 'react-router-dom';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 
  
  <Link className="navbar-brand" to={`/Student/`}>
    <img src={require("../../logoh.png")} width="50px" height="50px" alt="logo"  />
    </Link>
  
 
  <ul className="navbar-nav">
    <li className="nav-item">
    <Link className="nav-link" to={`/`}>Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to={`/StudentForm/`}>Add</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={`/Student/`}>Student</Link>
    </li>
  </ul>
</nav>


</div>
    )
}

export default Navbar
