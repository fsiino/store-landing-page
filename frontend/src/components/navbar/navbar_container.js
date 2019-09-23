import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/users_actions';

import NavBar from './navbar';

const mSTP = ( state ) => {
  let currentUserId = state.session.user.id;
  return {
    loggedIn: state.session.isAuthenticated ,
    users: Object.values(state.users),
    currentUserId
  };
};

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mSTP,
  mDTP
  // { logout }
)(NavBar));