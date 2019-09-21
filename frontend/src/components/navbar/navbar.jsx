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
      </div> ) : <>&nbsp;</>
    )

    return (
      <div className="navbar-container">
        <div className="nb-logo-wrapper">
          <Link to="/">
            <div>Home</div>
          </Link>
          <hr></hr>
          <Link to="/">
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