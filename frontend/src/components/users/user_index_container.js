import { connect } from 'react-redux';
import UserIndex from './user_index';

const mSTP = state => ({
  users: Object.values(state.users)
});

export default connect(
  mSTP
)(UserIndex);