import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  // debugger
  switch (action.type) {
    case RECEIVE_USERS:
      nextState = action.users;
      return nextState;
    case RECEIVE_USER:
      nextState = Object.assign({}, action.user);
      return nextState;
    default:
      return oldState;
  }
};

export default usersReducer;