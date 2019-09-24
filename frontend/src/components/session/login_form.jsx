import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../style/session_form.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.handleDemoUser = this.handleDemoUser.bind(this);
    this.animateDemoUser = this.animateDemoUser.bind(this);
  }

  // Once the user has been authenticated, redirect to the products page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/products');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  async animateDemoUser(e) {
    e.preventDefault();

    const demoUser = {
      email: 'demo@email.com',
      password: 'password'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById('email-input').focus();
    for (let i = 1; i <= demoUser.email.length; i++) {
      this.setState({ email: demoUser.email.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('password-input').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('session-submit-btn').click();
    document.getElementById('password-input').blur();
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props.login({
      email: 'demo@email.com',
      password: 'password'
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <center>
        <h2>Welcome</h2>
        <h5>Please login or sign up to access the app</h5>
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br/>
            <label>Email:</label>
            <br/>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')} 
              id="email-input"
            />
            <br />
            <label>Password:</label>
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')} 
              id="password-input"
            />
            <br />
            <input id="session-submit-btn" type="submit" value="Submit" />
            <br/>
            <input type="submit" onClick={this.animateDemoUser} value="Demo Login" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
      </center>
    );
  }
}

export default withRouter(LoginForm);