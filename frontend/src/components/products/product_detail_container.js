import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProduct } from '../../actions/products_actions';
import ProductDetail from './product_detail';

const mSTP = (state, ownProps) => {
  // const productId = ownProps.match.params.id;
  let products = Object.values(state.products);
  // let product = products.find(
  //   p => p.product_id === productId
  // )
  return ({
    products
  });
}

const mDTP = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id))
});

export default withRouter(connect(
  mSTP,
  mDTP
)(ProductDetail));  