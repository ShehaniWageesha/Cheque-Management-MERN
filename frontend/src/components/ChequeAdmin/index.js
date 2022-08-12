import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

const Cheque = (props) => (
  <tr>
    <td>{props.cheque.accNo}</td>
    <td>{props.cheque.chequeBooks}</td>
    <td>{props.cheque.chequeOption}</td>
    <td>{props.cheque.delivery}</td>
    <td>{props.cheque.date.substring(0, 10)}</td>
    <td>{props.cheque.status}</td>

    <td>
      <a style={{ textDecoration: 'none' , fontWeight: "bold" , color:'green' }}
        href="#"
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: 'Request Approved!',
          })
        }}
      >
        Approve | 
      </a>
      <a style={{ textDecoration: 'none' , fontWeight: "bold" , color:'red' }}
        href="#"
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: 'Request Declined!',
          })
        }}
      >
        | Decline
      </a>
    </td>
  </tr>
);

Cheque.propTypes = {
  deleteCheque: PropTypes.func,
  cheque: PropTypes.shape({
    _id: PropTypes.any,
    date: PropTypes.shape({
      substring: PropTypes.date
    }),
    chequeBooks: PropTypes.string,
    chequeOption: PropTypes.string,
    delivery: PropTypes.string,
    accNo: PropTypes.string,
    status: PropTypes.string,
  })
};
export default Cheque;
