import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products_actions';
import Products from './products';

const mSTP = state => ({
  products: Object.values(state.entities.products)
});

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(
  mSTP,
  mDTP
)(Products);