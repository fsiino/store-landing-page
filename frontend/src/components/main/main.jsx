import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
      <center>
        <h2>Welcome</h2>
        <Link to="/login">
          Login
        </Link>
        &nbsp; | &nbsp;
        <Link to="/signup">
          Sign Up
        </Link>
        <p>Store Front App</p>
        <footer>
          Copyright &copy; 2019 Frankie Siino 
        </footer>
      </center>
    );
  }
}

export default Main;