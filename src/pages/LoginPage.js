import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import '../styles/pages.scss';

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
      <div className="loginWrapper">
        <h1 className="page-title">Login Page</h1>

        <form
          className="loginForm"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className="input_label">
            Mail
            <input
              className="form_input"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="input_label">
            Password
            <input
              className="form_input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className="button" type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
