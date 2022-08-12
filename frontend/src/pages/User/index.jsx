/** @format */

import React, { Component } from 'react';
import { createUser } from '../../services/user';

class User extends Component {
  state = {
    accNo: '',
  };

  onChangeAccNo = (e) => {
    this.setState({
      accNo: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      accNo: this.state.accNo,
    };

    try {
      const response = await createUser(user);
      // success scenario handle here
      console.log(response.data);
    } catch(ex) {
      // error handling
      // show proper error message to user
    }
    this.setState({ accNo: '' });
  };

  render() {
    return (
      <div>
        <h3>Add an Account</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.accNo}
              onChange={this.onChangeAccNo}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Account"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default User;
