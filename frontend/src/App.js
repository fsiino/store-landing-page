import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import ProductContainer from './components/products/products_container';

function App() {
  return (
    <div>
      <NavBar/>
      <ProductContainer/>
    </div>
  )
}

export default App;
