import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import "./sideNav.css"

class SideNav extends React.Component {

  render() {
    return (
      <div>
        
        <div className="sideNav">
          <div className="name">
            <br></br>
            <h6><b>Samarakoon H.M.U.S.S</b><br></br><small>Savings -1287523648957586</small></h6>
          </div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard">Make a payment</Link>
          <Link to="/dashboard">Apply for accounts</Link>
          <Link to="/dashboard">Apply for loans</Link>
          <Link to="/index">Apply for cheque books</Link>
          
          <div className="cal">
            <Calendar />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default SideNav;
