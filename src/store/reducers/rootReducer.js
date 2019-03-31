import customerReducer from './customerReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  customer : customerReducer
});

export default rootReducer;
