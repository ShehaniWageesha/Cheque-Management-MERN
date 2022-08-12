/** @format */

import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (
      <div style= {{ width: '40rem' , marginTop: '100px' ,  marginLeft: '250px' , marginRight: '250px' , textAlign: 'center' }} >
        <Card border="light" style={{ width: '40rem' , height: '30rem' , backgroundColor: '#cfd8dc' }} >
          <Card.Header style= {{ fontWeight: "bold", fontSize: "20px" }} >Welcome to Smart Banking</Card.Header>
          <br></br>
          <Card.Title style= {{ fontWeight: "normal", fontSize: "15px", textAlign: 'center', marginRight: '20px' }} >Mr. Kavinda Perera</Card.Title>
          <Card.Title style= {{ fontWeight: "normal", fontSize: "15px", textAlign: 'center', marginRight: '20px' }} >1234 5678 9012 - Savings</Card.Title>
          <Card.Title style= {{ fontWeight: "normal", fontSize: "15px", textAlign: 'center', marginRight: '20px' }} >Effective Available Balance : LKR 157,754.64</Card.Title>
          <hr></hr>
          <Card.Body>
            <Link to="/dashboard" className="link" style={{ textDecoration: 'none' , color: 'black' }} >
              <h6>MAKE PAYMENTS</h6>
              <br></br>
            </Link>
            <Link to="/dashboard" className="link" style={{ textDecoration: 'none' , color: 'black' }} >
              <h6>ACCOUNTS</h6>
              <br></br>
            </Link>
            <Link to="/" className="link" style={{ textDecoration: 'none' , color: 'black' }} >
              <h6>CHEQUE BOOKS</h6>
              <br></br>
            </Link>
            <Link to="/dashboard" className="link" style={{ textDecoration: 'none' , color: 'black' }} >
              <h6>LOANS</h6>
              <br></br>
            </Link>
            <hr></hr>
          </Card.Body>
          <Card.Title style= {{ fontWeight: "bold", fontSize: "15px" }}>Logout</Card.Title>
        </Card> 
      </div>
        );
  }
}

export default Dashboard;
