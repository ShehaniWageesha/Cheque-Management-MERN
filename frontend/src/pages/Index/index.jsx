/** @format */

import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

class Index extends Component {

  render() {
    return (
      <div style= {{ position: 'fixed', width: '40rem' , marginTop: '40px' ,  marginLeft: '250px' , marginRight: '250px' , textAlign: 'center' }} >
        <Card border="light" style={{ width: '40rem' , height: '40rem' , backgroundColor: '#cfd8dc' }} >
          <Card.Header style= {{ fontWeight: "bold", fontSize: "25px" }} >Welcome to Smart Banking</Card.Header>
          <br></br>
          <Card.Title style= {{ fontWeight: "normal", fontSize: "15px", textAlign: 'center', marginRight: '20px' }} >Mr. Kavinda Perera</Card.Title>
          <Card.Title style= {{ fontWeight: "normal", fontSize: "15px", textAlign: 'center', marginRight: '20px' }} >1234 5678 9012 - Savings</Card.Title>
          <Card.Title style= {{ fontWeight: "normal", fontSize: "15px", textAlign: 'center', marginRight: '20px' }} >Effective Available Balance : LKR 157,754.64</Card.Title>
          <br></br>
          <hr></hr>
          <Card.Body>
            <br></br>
            <br></br>
            <Link to="/create" className="link" style={{ textDecoration: 'none' , color: '#4d4d4d' , fontWeight: "normal" }} >
              <h6>APPLY FOR CHEQUE BOOKS</h6>
              <br></br>
            </Link>
            <Link to="/" className="link" style={{ textDecoration: 'none' , color: '#4d4d4d' , fontWeight: "normal" }} >
              <h6>CHEQUE BOOKS REQUEST LIST</h6>
              <br></br>
            </Link>
            <Link to="/stop" className="link" style={{ textDecoration: 'none' , color: '#4d4d4d' , fontWeight: "normal" }} >
              <h6>CHEQUES</h6>
              <br></br>
            </Link>
            <Link to="/chequeadmin" className="link" style={{ textDecoration: 'none' , color: '#4d4d4d' , fontWeight: "normal" }} >
              <h6>ADMIN PANEL</h6>
              <br></br>
            </Link>
            <hr></hr>
            <br></br>
          </Card.Body>
          {/* <Card.Title style= {{ fontWeight: "bold", fontSize: "15px" }}>Logout</Card.Title> */}
        </Card> 
      </div>
        );
  }
}

export default Index;
