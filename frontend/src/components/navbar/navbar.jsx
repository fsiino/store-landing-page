import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/navbar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const showGoBack = () => {
      return (
        <Link to="/">
          <span>Go Back</span>
        </Link>
      )
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
          Welcome, User
        </div>

        <div className="nav-links">
          See All Users
        </div>
      </div>
    )
  }

}

export default NavBar;