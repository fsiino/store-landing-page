import * as ProductAPIUtil from '../util/products_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
};

export const receiveProduct = product => {
  return {
    type: RECEIVE_PRODUCT,
    product
  };
};

export const fetchProducts = () => dispatch => (
  ProductAPIUtil.fetchProducts().then(products => (
    dispatch(receiveProducts(products.data))
  ))
);

export const fetchProduct = (id) => dispatch => (
  ProductAPIUtil.fetchProduct(id).then(product => (
    dispatch(receiveProduct(product.data))
  ))
);