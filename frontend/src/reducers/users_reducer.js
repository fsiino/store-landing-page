import { RECEIVE_USERS } from '../actions/users_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;
  // debugger
  switch (action.type) {
    case RECEIVE_USERS:
      nextState = action.users;
      return nextState;
    default:
      return oldState;
  }
};

export default usersReducer;