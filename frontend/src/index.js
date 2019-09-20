import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './Root'
import './index.css';
import * as serviceWorker from './serviceWorker';

import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';


// document.addEventListener('DOMContentLoaded', () => {

// const store = configureStore();
// window.getState = store.getState;

// ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// });

document.addEventListener('DOMContentLoaded', () => {
  let store;

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
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});