import {GET_ALL_CUSTOMERS} from '../actions/types'

const initState = {
  customers: []
};

const customerReducer = (state = initState, action) => {
  switch(action.type){
    case GET_ALL_CUSTOMERS: 
      return {
        ...state,
        customers: action.payload
      }
    default: 
      return state
  }
};

export default customerReducer;
