import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import '../styles/pages.scss';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="registerWrapper">
        <h1 className="page-title">Registration page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label className="input_label">
            Name
            <input
              className="form_input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapStateToProps)(RegisterPage);
