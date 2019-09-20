import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './Root'
import './index.css';
import * as serviceWorker from './serviceWorker';


document.addEventListener('DOMContentLoaded', () => {

const store = configureStore();
window.getState = store.getState;

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
});