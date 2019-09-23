import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/navbar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers(() => (
      this.setState({ 
        users: this.props.users 
      })
    ));
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

    const showButtons = () => {
      if (this.props.loggedIn) {
        return (
          <button onClick={this.logoutUser}>Logout</button>
        )
      } else {
        if (this.props.location.pathname === '/login') {
          return (
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          )
        } else if (this.props.location.pathname === '/signup') {
        return (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )
      } else {
        return (
          <>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link> &nbsp;
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )
      }
    }
  }

    const greeting = () => {
      if (this.props.loggedIn) {
        let currentUser = this.props.users.find(u => u._id === this.props.currentUserId) || '';
        return <span>Welcome, {currentUser.handle}</span>
      } else {
        return <span>You're not logged in</span>
      }
    }

    return (
      <div className="navbar-container">
        <div className="nb-logo-wrapper">
          <Link to="/products">
            <img src={process.env.PUBLIC_URL + `/fs-logo.png`} alt="logo" className="logo"/>
          </Link>
          {showGoBack()}

        </div>

        <div className="welcome">
          {greeting()}
          <br/>
          <div className="li-su-btns">
            {showButtons()}
          </div>
        </div>

        <div className="nb-links-wrapper">
          
          <div className="nav-links">
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