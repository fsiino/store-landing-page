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
          <center>
          <Link to="/login">
            <button>Login</button>
          </Link> &nbsp;
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          </center>
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

    const showUsers = () => (
      this.props.loggedIn ? (
      <div className="nav-links">
        <Link to="/users">
          See All Users
          </Link>
          <br/>
        <link to="/products">
          Shop Our Products
        </link>
      </div> ) : <>&nbsp;</>
    )

    return (
      <div className="navbar-container">
        <div className="nb-logo-wrapper">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/products">
            <img src={process.env.PUBLIC_URL + `/fs-logo.png`} alt="logo" className="logo"/>
          </Link>
          
          {showGoBack()}

        </div>

        <div className="welcome">
        {greeting()}
        <br/>
        {showLogout()}
        </div>

      <div className="nb-logo-wrapper">
        {showUsers()}
      </div>
      </div>
    )
  }

}

export default NavBar;