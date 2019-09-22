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
  }

  // Once the user has been authenticated, redirect to the products page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/products');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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
              // placeholder="Email"
            />
            <br />
            <label>Password:</label>
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              // placeholder="Password"
            />
            <br />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
      </center>
    );
  }
}

export default withRouter(LoginForm);