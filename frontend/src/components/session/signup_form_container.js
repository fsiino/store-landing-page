import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);