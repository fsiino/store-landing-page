import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import NavBarContainer from './components/navbar/navbar_container';
import ProductIndexContainer from './components/products/product_index_container';
import ProductDetailContainer from './components/products/product_detail_container';
import Main from './components/main/main';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';


function App() {
  return (
    <div>
      <NavBarContainer/>
      
      <Switch>
        <AuthRoute exact path="/" component={Main} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <ProtectedRoute exact path="/products" component={ProductIndexContainer} />
        <ProtectedRoute exact path="/products/:id" component={ProductDetailContainer} /> */}
        <Route exact path="/products" component={ProductIndexContainer} />
        <Route exact path="/products/:id" component={ProductDetailContainer} />
      </Switch>

    </div>
  )
}

export default App;
