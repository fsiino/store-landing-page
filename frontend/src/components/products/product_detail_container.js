import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/products_actions';
import Products from './products';

const mSTP = (state, ownProps) => {
  const productId = ownProps.match.params.product_id;
  return {
    product: state.entities.products[productId],
  };
}

const mDTP = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id))
});

export default connect(
  mSTP,
  mDTP
)(Products);