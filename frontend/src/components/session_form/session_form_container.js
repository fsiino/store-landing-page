import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = state => ({
  products: Object.values(state.entities.products)
});

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(
  mSTP,
  mDTP
)(SessionForm);