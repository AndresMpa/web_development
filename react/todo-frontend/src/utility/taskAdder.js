import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assent/style/basic.css";
import "../assent/style/adder.css";

export default class TaskAdder extends Component {
  render() {
    return (
      <article className="adder">
        <Link to={"/add-task"}>
          <button className="adder--button bg-alt">Add new task</button>
        </Link>
        {/*<button className="adder--button">Add new list</button>*/}
      </article>
    );
  }
}
