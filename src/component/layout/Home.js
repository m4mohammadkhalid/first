import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <Jumbotron bsPrefix class="container">
  <h1>Hello, Home</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
  <Link className="nav-link" to={`/Student`}> <button variant="primary">Learn more 30 min</button></Link>
  </p>
</Jumbotron>
    )
}

export default Home
