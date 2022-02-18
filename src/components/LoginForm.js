import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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

export default LoginForm;
