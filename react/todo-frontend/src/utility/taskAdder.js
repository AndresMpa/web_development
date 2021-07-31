import React, { Component } from "react";
import "../assent/style/basic.css";
import "../assent/style/adder.css";

export default class TaskAdder extends Component {
  render() {
    return (
      <div className="adder">
        <button className="adder--button bg-alt">Add new task</button>
        {/*<button className="adder--button">Add new list</button>*/}
      </div>
    );
  }
}
