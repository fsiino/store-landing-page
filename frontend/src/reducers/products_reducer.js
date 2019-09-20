import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/products_actions';

const productsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  // debugger
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      // nextState = action.products 
      nextState = action.products;
      return nextState;
    case RECEIVE_PRODUCT:
      nextState = Object.assign({}, oldState, action.product );
      return nextState;
    default:
      return oldState;
  }
};

export default productsReducer;