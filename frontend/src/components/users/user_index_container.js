import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users_actions';
import UserIndex from './user_index';

const mSTP = state => ({
  users: Object.values(state.users)
});

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mSTP,
  mDTP
)(UserIndex);