import "../assent/style/basic.css";
import "../assent/style/login.css";

import React, { Component } from "react";

//import { BrowserRouter as Router } from "react-router-dom";

export default class Login extends Component {
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
//              onChange={(e) => {
                //this.setState({ email: e.target.value });
              //}}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={this.state.password}
//              onChange={(e) => {
                //this.setState({ password: e.target.value });
              //}}
            />
            <br />
            <br />
            <button type="submit"> Login </button>
          </form>
        </article>
      </section>
    );
  }
}
