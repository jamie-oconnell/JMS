import { GET_ALL_CUSTOMERS } from "./types";
import Axios from "axios";

export const getAllCustomers = () => dispatch => {
  Axios.get(`http://localhost:5000/api/customers/`).then(res => {
    dispatch({
      type: GET_ALL_CUSTOMERS,
      payload: res.data
    });
  });
};
