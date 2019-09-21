import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users.data))
  ))
);