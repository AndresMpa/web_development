
import React, { Component } from "react";

import RouterSwitcher from "../router/mainRouter";
import TaskAdder from "../utility/taskAdder";
import Navigator from "../utility/navigator";
import Tags from "../utility/tags";

import "../assent/style/basic.css";
import "../assent/style/app.css";

//import { BrowserRouter as Router } from "react-router-dom";

export default class Todo extends Component {
  render() {
    return (
      <section className="app">
        <article className="btn">
          <Tags />
        </article>
        <article className="nav">
          <Navigator />
        </article>
        <article className="ctn">
          <RouterSwitcher />
        </article>
        <article className="frm">
          <TaskAdder />
        </article>
      </section>
    );
  }
}
