import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import products from './products_reducer';
import users from './users_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  products,
  users
});

export default RootReducer;