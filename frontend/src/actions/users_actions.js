import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users.data))
  ))
);

export const fetchUser = (id) => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user.data))
  ))
);