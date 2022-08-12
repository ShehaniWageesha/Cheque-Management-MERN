import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

import { RoutePaths } from '../../routes/route-paths';

const Cheque = (props) => (
  <tr>
    <td>{props.cheque.accNo}</td>
    <td>{props.cheque.chequeBooks}</td>
    <td>{props.cheque.chequeOption}</td>
    <td>{props.cheque.delivery}</td>
    <td>{props.cheque.date.substring(0, 10)}</td>
    <td>{props.cheque.status}</td>

    <td>
      <Link to={`${RoutePaths.edit}${props.cheque._id}`} style={{ color:'green' , textDecoration: 'none' , fontWeight: "bold" }}>Edit |</Link>  
      <a style={{ textDecoration: 'none' , fontWeight: "bold" , color:'red' }}
        href="#"
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: 'Request Canceled Successfully!',
          })
          props.deleteCheque(props.cheque._id);
        }}
      >
        | Cancel
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
    status: PropTypes.string,
    accNo: PropTypes.string
  })
};
export default Cheque;
