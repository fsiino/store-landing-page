import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/main.scss';

class Main extends React.Component {

  render() {
    return (
      <center>
        <div className="main-container">
          <h2>Welcome</h2>
          <br/>
          <h5>Please login or sign up to access the app</h5>
        </div>
      </center>
    );
  }
}

export default Main;