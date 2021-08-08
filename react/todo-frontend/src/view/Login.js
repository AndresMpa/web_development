import "../assent/style/basic.css";
import "../assent/style/login.css";

import React, { Component } from "react";
import api from '../api/index';

//import { BrowserRouter as Router } from "react-router-dom";

import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      password: "",
      email: "",
    };

    // Setting up functions
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    api.get("/send")

    console.log();

    this.setState({
      password: "",
      email: "",
    });
  }

  render() {
    return (
      <section className="login">
        <article>
          <form onSubmit={this.props.history.push("/main")}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br />
            <br />
            <button
              onClick={() => {
                auth.login(() => {
                  this.props.history.push("/app");
                });
              }}
            ></button>
          </form>
        </article>
      </section>
    );
  }
}
