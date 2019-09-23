import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../style/session_form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',   
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

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
            <br />
            <label>Email:</label>
            <br/>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
            <br />
            <label>Name:</label>
            <br/>
            <input type="text"
              value={this.state.handle}
              onChange={this.update('handle')}
            />
            <br />
            <label>Password:</label>
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <br />
            <label>Confirm Password:</label>
            <br/>
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
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

export default withRouter(SignupForm);