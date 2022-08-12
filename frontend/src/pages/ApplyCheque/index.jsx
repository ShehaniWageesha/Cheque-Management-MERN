/** @format */

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2'
import { addCheques } from '../../services/cheque';
import "../../components/Navbar/sideNav.css"
class ApplyCheque extends Component {
  state = {
    accNo: '',
    chequeBooks: '',
    chequeOption: '',
    delivery: '',
    date: new Date(),
    status: 'Pending',
  };

  onChangeAccNo = (e) => {
    this.setState({
      accNo: e.target.value,
    });
  };
  onChangeChequeBooks = (e) => {
    this.setState({
      chequeBooks: e.target.value,
    });
  };
  onChangeChequeOption = (e) => {
    this.setState({
      chequeOption: e.target.value,
    });
  };
  onChangeDelivery = (e) => {
    this.setState({
      delivery: e.target.value,
    });
  };
  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };
  onChangeStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addCheques({
        accNo: this.state.accNo,
        chequeBooks: this.state.chequeBooks,
        chequeOption: this.state.chequeOption,
        delivery: this.state.delivery,
        date: this.state.date,
        status: this.state.status,
      });
      // success scenario handle here
      if (response.data) {
      //  console.log(response.data);
      }

    } catch(ex) {
      // error handling
      // show proper error message to user
    }

    Swal.fire({
      icon: 'success',
      title: 'Request Sent Successfully!',
      
    })
   
    this.setState({ accNo: '' });
    this.setState({ chequeBooks: '' });
    this.setState({ chequeOption: '' });
    this.setState({ delivery: '' });
    this.setState({ date: new Date() });
    this.setState({ status: 'Pending' });
    window.location = "/";
  };

  render() {
    return (
      <div style={{ paddingLeft: '1px' }} >
        <div style= {{ width: '40rem' , marginLeft: '250px' , marginRight: '250px' }} >
          <br></br>
          <br></br>
          <br></br>
          <div className="listbtn">
            <Link to="/" className="btn btn-primary">
              <h6>Cheque Books Request List</h6>
            </Link>
          </div>
          <h4>Apply for Cheque Books</h4>
          <form onSubmit={this.onSubmit} >
            <div className="form-group" style={{ fontWeight: "bold" }}>
              <label>Select Account</label>
              <select
                required
                className="form-control"
                value={this.state.accNo}
                onChange={this.onChangeAccNo}
              >
                <option value="Current - 1234 5678 9012">Current - 1234 5678 9012</option>
                <option value="Current - 2109 8765 4321">Current - 2109 8765 4321</option>
              </select>
            </div>
            <div className="form-group" style={{ fontWeight: "bold" }} >
              <label>No of Cheque Books</label>
              <input
                type="text"
                className="form-control"
                value={this.state.chequeBooks}
                onChange={this.onChangeChequeBooks}
              />
            </div>
            <div style={{ fontWeight: "bold" }}  >
              <label> Cheque Book Option </label>
              <div className="form-group" style={{ fontWeight: "normal" }} >
                <input
                    type="radio"
                    value="With 25 Leaves"
                    checked={this.state.chequeOption === "With 25 Leaves"}
                    onChange={this.onChangeChequeOption}
                />
                <label> With 25 Leaves </label>
              </div>
              <div className="form-group" style={{ fontWeight: "normal" }} >
                <input
                  type="radio"
                  value="With 50 Leaves"
                  checked={this.state.chequeOption === "With 50 Leaves"}
                  onChange={this.onChangeChequeOption}
                />
                <label> With 50 Leaves </label>
              </div>
            </div>
            <div className="form-group" style={{ fontWeight: "bold" }} >
              <label>Delivery Details (Branch)</label>
              <select 
                required
                className="form-control"
                value={this.state.delivery}
                onChange={this.onChangeDelivery} 
              >
                <option value="Colombo - BC001">Colombo - BC001</option>
                <option value="Kandy - BC002">Kandy - BC002</option>
                <option value="Matara - BC003">Matara - BC003</option>
                <option value="Galle - BC004">Galle - BC004</option>
                <option value="Kurunegala - BC005">Kurunegala - BC005</option>
              </select>
            </div>
            <div className="form-group" style={{ fontWeight: "bold" }} >
              <label>Required Date</label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                  minDate={new Date()}
                />
              </div>
            </div>
            <div className="form-group" style={{ fontWeight: "bold" }} >
              <input
                type="submit"
                value="Send Request"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
        );
  }
}

export default ApplyCheque;
