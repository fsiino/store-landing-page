import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './Root'
import './index.css';
import * as serviceWorker from './serviceWorker';

import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  const jwtToken = localStorage.getItem("jwtToken");
  if (jwtToken !== "undefined") {
    // Set auth token header auth
    setAuthToken(jwtToken);
    // Decode token and get user info and exp
  }

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  window.getState = store.getState;
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});