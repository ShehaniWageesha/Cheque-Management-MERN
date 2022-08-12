/** @format */

import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2'
//import { stopCheques } from '../../services/cheque';
import "../../components/Navbar/sideNav.css"
class StopCheque extends Component {
  state = {
    action: '',
    account: '',
    reason: '',
    chequeNo: '',
  };

  onChangeAction = (e) => {
    this.setState({
      action: e.target.value,
    });
  };
  onChangeAccount = (e) => {
    this.setState({
      account: e.target.value,
    });
  };
  onChangeReason = (e) => {
    this.setState({
      reason: e.target.value,
    });
  };
  onChangeChequeNo = (e) => {
    this.setState({
      chequeNo: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await StopCheque({
        action: this.state.action,
        account: this.state.account,
        reason: this.state.reason,
        chequeNo: this.state.chequeNo,
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
      title: 'Cheque Stopped!',
      
    })
   
    this.setState({ action: '' });
    this.setState({ account: '' });
    this.setState({ reason: '' });
    this.setState({ chequeNo: '' });
    window.location = "/";
  };

  render() {
    return (
      <div style={{ paddingLeft: '1px' }} >
        <div style= {{ width: '40rem' , marginLeft: '250px' , marginRight: '250px' }} >
          <br></br>
          <br></br>
          <br></br>
          <h4>Stop Cheques</h4>
          <br></br>
          <form onSubmit={this.onSubmit} >
            <div className="form-group" style={{ fontWeight: "bold" }}>
              <label>Select Actions</label>
              <select
                required
                className="form-control"
                value={this.state.action}
                onChange={this.onChangeAction}
              >
                <option value="Stop Cheque Request">Stop Cheque Request</option>
              </select>
            </div>
            <div className="form-group" style={{ fontWeight: "bold" }} >
              <label>Select Account</label>
              <select
                required
                className="form-control"
                value={this.state.account}
                onChange={this.onChangeAccount}
              >
                <option value="Current - 1234 5678 9012">Current - 1234 5678 9012</option>
                <option value="Current - 2109 8765 4321">Current - 2109 8765 4321</option>
              </select>
            </div>
            <div style={{ fontWeight: "bold" }}  >
              <label> Reason </label>
              <div className="form-group" style={{ fontWeight: "normal" }} >
                <input
                    type="text"
                    className="form-control"
                    value={this.state.reason}
                    onChange={this.onChangeReason}
                />
              </div>
            </div>
            <div className="form-group" style={{ fontWeight: "bold" }} >
              <label>Cheque Number</label>
              <input
                type="text"
                className="form-control"
                value={this.state.chequeNo}
                onChange={this.onChangeChequeNo} 
              />
            </div>
            <br></br>
            <div className="form-group" style={{ fontWeight: "bold" }} >
              {/* <input
                type="submit"
                value="Stop Cheque"
                className="btn btn-primary"
              /> */}
              <a className="btn btn-primary" style={{ width: '40%' , fontSize: '14px' , marginLeft: '180px' , marginRight: '250px' , textDecoration: 'none' , fontWeight: 'bold' , color: 'white' }}
                href="#"
                onClick={() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Stop Cheque Request Sent!',
                })
              }}
              >
                STOP REQUEST
              </a>
            </div>
          </form>
        </div>
      </div>
        );
  }
}

export default StopCheque;
