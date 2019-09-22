import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/navbar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    
    const showGoBack = () => {
      if (
        this.props.location.pathname !== '/' && this.props.location.pathname !== '/products' && this.props.location.pathname !== '/login' &&  this.props.location.pathname !== '/signup'
        ) {
        return (
          <span className="go-bk-btn" onClick={this.goBack}>Go Back</span>
        )
      }
    }

    const showLogout = () => {
      if (this.props.loggedIn) {
        return (
          <button onClick={this.logoutUser}>Logout</button>
        )
      } else {
        return (
          <div className="li-su-btns">
          <Link to="/login">
            <button>Login</button>
          </Link> &nbsp;
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          </div>
        )
      }
    }

    const greeting = () => (
      this.props.loggedIn ? (
        <span>Welcome, User</span>
       ) : (
         <span>You're not logged in</span>
       )
    )

    return (
      <div className="navbar-container">
        <div className="nb-logo-wrapper">
            <img src={process.env.PUBLIC_URL + `/fs-logo.png`} alt="logo" className="logo"/>
          
          {showGoBack()}

        </div>

        <div className="welcome">
          {greeting()}
          <br/>
          {showLogout()}
        </div>

        <div className="nb-links-wrapper">
          
          <div className="nav-links">
            <Link to="/">
              Home
            </Link>&nbsp;|&nbsp;
            <Link to="/products">
              Products
            </Link>&nbsp;|&nbsp;
            <Link to="/users">
              Users
            </Link>
          </div> 

        </div>
      </div>
    )
  }

}

export default NavBar;