import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import ProductContainer from './components/products/products_container';
import ProductDetailContainer from './components/products/product_detail_container';

function App() {
  return (
    <div>
      <NavBar/>
      
      <Switch>
        <Route exact path="/" component={ProductContainer} />
        <Route exact path="/products" component={ProductContainer} />
        <Route exact path="/products/:id" component={ProductDetailContainer} />
      </Switch>

    </div>
  )
}

export default App;
