import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/main.scss';

class Main extends React.Component {

  render() {
    return (
      <center>
        <div className="main-container">
          {/* <h2>Welcome</h2> */}
          {/* <Link to="/login">
            Login
          </Link>
          &nbsp; | &nbsp;
          <Link to="/signup">
            Sign Up
          </Link> */}
          {/* <p>Store Front App</p> */}
        </div>
      </center>
    );
  }
}

export default Main;