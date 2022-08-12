import React from 'react';
import PropTypes from 'prop-types';

const StopCheque = (props) => (
  <tr>
    <td>{props.stopCheque.action}</td>
    <td>{props.stopCheque.account}</td>
    <td>{props.stopCheque.reason}</td>
    <td>{props.stopCheque.chequeNo}</td>

    <td>
      <a style={{ textDecoration: 'none' , fontWeight: "bold" , color:'red' }}
        href="#"
        onClick={() => {
          Swal.fire({
            icon: 'success',
            title: 'Cheque Stopped!',
          })
        }}
      >
        <h4>Stop</h4>
      </a>
    </td>

  </tr>
);

StopCheque.propTypes = {
  stopCheque: PropTypes.shape({
    _id: PropTypes.any,
    action: PropTypes.string,
    account: PropTypes.string,
    reason: PropTypes.string,
    chequeNo: PropTypes.number,
  })
};
export default StopCheque;
