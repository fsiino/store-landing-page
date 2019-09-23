import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/users_actions';

import NavBar from './navbar';

const mSTP = (state) => {
  return {
    loggedIn: state.session.isAuthenticated,
    users: Object.values(state.users),
    currentUserId: state.session.user.id || {},
  };
};

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mSTP,
  mDTP
)(NavBar));

/* */

import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const greeting = () => {
      if (this.props.loggedIn) {
        let currentUser = this.props.users.find(u => u._id === this.props.currentUserId) || '';
        return <span>Welcome, {currentUser.handle}</span>
      } else {
        return <span>You're not logged in</span>
      }
    }

    return (
      <div>
        {greeting()}
      </div>
    )
  }
}

export default Welcome;