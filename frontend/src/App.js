import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import NavBarContainer from './components/navbar/navbar_container';
import ProductIndexContainer from './components/products/product_index_container';
import ProductDetailContainer from './components/products/product_detail_container';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import UserIndexContainer from './components/users/user_index_container';
import Footer from './components/footer/footer';


function App() {
  return (
    <div>
      <NavBarContainer/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Switch>
        <ProtectedRoute exact path="/" component={ProductIndexContainer} />
        <ProtectedRoute exact path="/products" component={ProductIndexContainer} />
        <ProtectedRoute exact path="/products/:id" component={ProductDetailContainer} />
        <ProtectedRoute exact path="/users" component={UserIndexContainer} />
      </Switch>

      <Footer/>

    </div>
  )
}

export default App;
