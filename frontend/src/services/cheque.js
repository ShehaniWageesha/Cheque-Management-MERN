import { CHEQUE,CREATE_CHEQUE,DELETE_CHEQUE,GET_CHEQUE,UPDATE_CHEQUE,STOP_CHEQUE } from './client/endpoints';
import { Axios } from './client/index';

// get cheques
export const getCheques = () => {
  return Axios.get(CHEQUE);
};

// delete cheques
export const deleteCheque = (id) => {
  return Axios.delete(`${DELETE_CHEQUE}/${id}`);
};
//add cheques
export const addCheques = (cheque) => {
  return Axios.post(CREATE_CHEQUE,cheque);
};
//stop cheque
export const stopCheques = (stopCheque) => {
  return Axios.post(STOP_CHEQUE,stopCheque);
};

// get single cheque
export const getSingleCheque = (id) => {
  return Axios.get(`${GET_CHEQUE}/${id}`);
};

//update cheque
export const updateCheques = (id,cheque) => {
  return Axios.post(`${UPDATE_CHEQUE}/${id}`,cheque);
};
