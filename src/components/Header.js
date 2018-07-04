import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';



class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
        <a className="navbar-brand" href="#">BoulderBikeTour</a>
        </div>

        <div className="navbar-collapse" id="myID">
          <ul className="nav navbar-nav navbar-right">
             <li><Link to={"Home"}>Home</Link></li>
              <li><Link to={"/App"}>Riders</Link></li>
              <li><Link to={"/Location"}>Location</Link></li>
              <li><Link to={"/ContestPage"}>Contest</Link></li>
              <li><Link to={"/Gallery"}>Gallery</Link></li>
          </ul>

        </div>
      </div>
</nav>



    );
  }
}

export default Header;
