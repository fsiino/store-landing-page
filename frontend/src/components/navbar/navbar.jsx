import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/navbar.scss';

class NavBar extends React.Component {

  render() {
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
        </div>

        <div className="welcome">
          Welcome, user
        </div>

        <div className="nav-links">
          Sign In
        </div>
      </div>
    )
  }

}

export default NavBar;