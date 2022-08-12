/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import "./sideNav.css"

const NavBar = () => (
  <div className="navhead">
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        <h4>SMART BANKING</h4>
      </Link>

      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="navbar-item">
            <Link to="/dashboard" className="nav-link">
              <h6>Dashboard</h6>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/" className="nav-link">
              <h6>Cheque Books Request List</h6>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              <h6>Apply for Cheque Books</h6>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/stop" className="nav-link">
              <h6>Stop Cheques</h6>
            </Link>
          </li> */}

        </ul>
      </div>
    </nav>
  </div>);

export default NavBar;
