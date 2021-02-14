import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark NavBar">
        <Link to={`/`} className="navbar-brand">
            Car 2 Tree
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
                <Link to={`/`} className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="https://github.com/Zenigma/emission_tracker_treehacks/">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Nav;