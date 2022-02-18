import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "./../redux/actions/LoginAction-2";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.login.user.email,
      password: this.props.login.user.password,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = this.state;
    console.log(user);

    this.props.loginUser(user);
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    );
  }
}
// state->points->reducer->rootReducer->login and product
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
