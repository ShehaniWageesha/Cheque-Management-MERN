/** @format */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navbar/index';
import SideNav from '../components/Navbar/sideNav';
import Routes from '../routes/index';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <SideNav/>
      <div className="container">
        <br />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
