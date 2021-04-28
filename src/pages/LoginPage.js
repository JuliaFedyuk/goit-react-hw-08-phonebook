// import { connect } from 'react-redux';
import { Component } from 'react';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
