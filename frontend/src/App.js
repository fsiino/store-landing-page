import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import ProductContainer from './components/products/products_container';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
    <NavBar/>
    <ProductContainer/>
    </div>
  )
}

// Add this in your component file
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export default App;
