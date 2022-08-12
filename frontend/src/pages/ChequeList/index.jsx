/** @format */

import React, { Component } from 'react';
import jsPDF from 'jspdf';
import Cheque from '../../components/Cheque/index';
import 'jspdf-autotable';
import { deleteCheque, getCheques } from '../../services/cheque';

class ChequesList extends Component {
  state = {
    cheques: [],
  };

  componentDidMount() {
    this.fetchCheques();
  }

  fetchCheques = async () => {
    try{
      const response = await getCheques();

      this.setState({ cheques: response.data || [] });
    
    } catch(e) {
      // error handling
    }
  }
  pdfHandler = (event) => {
    event.preventDefault();
    const doc = new jsPDF()
    doc.autoTable({ html: '#cheque-request-table' })
    doc.save('cheque-request-list.pdf')
}

  removeCheque = async (id) => {
    try {
      const response = await deleteCheque(id);

      // check response validation and success logic
      if (response.data) {
        this.setState({
          cheques: this.state.cheques.filter((el) => el._id !== id),
        });
      }

    } catch(e) {
      // error handling
    }
  }

  chequesList() {
    return this.state.cheques.map((currentcheque) => {
      return (
        <Cheque
          cheque={currentcheque}
          deleteCheque={this.removeCheque}
          key={currentcheque._id}
        />
      );
    });
  }
 
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h4 style= {{ marginLeft: '130px' }} >Cheque Book Requests</h4>
        <br></br>
        <input name ="searchId" type="text" placeholder="Search By Date" onChange= { this.myChangeHandler } style= {{ marginLeft: '920px' }} />
        <input className="btn btn-primary" color="info" icon="search" style= {{ marginLeft: '10px' , position : 'absolute' }} content="width=device-width" type="submit" value= { "Search" } />
        <h1></h1><br></br>
        <table className="table" style= {{ position: 'fixed' , marginLeft: '130px' , width: '80%' , marginRight: '130px' , paddingRight: '70px' }} id={"cheque-request-table"} responsive>
          <thead className="thead-light" style= {{ textAlign: 'center' }} >
            <tr>
              <th>Account Number</th>
              <th>No of Cheque Books</th>
              <th>Cheque Book Option</th>
              <th>Delivery Details</th>
              <th>Required Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style= {{ textAlign: 'center' }} >{this.chequesList()}</tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit={this.pdfHandler}><input type="submit" value="Download as a PDF" className="btn btn-primary" style= {{ position: 'relative' , marginLeft: '130px' , marginTop: '250px' , marginRight: '130px' }} />
        </form>
      </div>
    );
  }
}

export default ChequesList;
