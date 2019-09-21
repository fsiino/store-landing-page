import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/navbar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    const showGoBack = () => {
      return (
        <Link to="/products">
          <span>Go Back</span>
        </Link>
      )
    }

    const showLogout = () => {
      if (this.props.loggedIn) {
        return (
          <button onClick={this.logoutUser}>Logout</button>
        )
      } else {
        return (
          <center>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          </center>
        )
      }
    }

    const greeting = () => {
      if (this.props.loggedIn) {
        return <span>Welcome, User</span>
      } else {
        return <span>Youre not logged in</span>
      }
    }

    return (
      <div className="navbar-container">
        <div className="nb-logo-wrapper">
          <Link to="/">
            <div>HP Store</div>
          </Link>
          <hr></hr>
          <Link to="/">
            <img src="https://ssl.www8.hp.com/us/en/images/i/hpi/header-footer/caas-hf-v3.2/hpi-hp-logo-pr.gif" alt="logo" className="hp-logo"/>
          </Link>
          
          {showGoBack()}

        </div>

        <div className="welcome">
        {greeting()}
        <br/>
        {showLogout()}
        </div>

        <div className="nav-links">
          See All Users
        </div>
      </div>
    )
  }

}

export default NavBar;