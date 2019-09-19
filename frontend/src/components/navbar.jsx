import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './navbar.scss';

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar-container">
        <div className="nb-logo-wrapper">
          <div>HP Store</div>
          
          <img src="https://ssl.www8.hp.com/us/en/images/i/hpi/header-footer/caas-hf-v3.2/hpi-hp-logo-pr.gif" className="hp-logo"/>
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