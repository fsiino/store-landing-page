import { combineReducers } from 'redux';

import productsReducer from './products_reducer';
import sessionReducer from './session_reducer';

const entitiesReducer = combineReducers({
  products: productsReducer,
  session: sessionReducer
});

export default entitiesReducer;