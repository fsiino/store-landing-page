import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';

const mapStateToProps = state => {
  // debugger
  return {
    loggedIn: state.session.isAuthenticated 
  }
};

export default withRouter(connect(
  mapStateToProps,
  { logout }
)(NavBar));