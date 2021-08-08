import React, { Component } from "react";
import Profile from "../component/profile";
import { Link } from "react-router-dom";

import "../assent/style/navigator.css";
import "../assent/style/basic.css";

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.navigator = React.createRef();
  }

  handleClick() {
    const list = this.navigator.current;
    if (list.style.display === "block") {
      list.style.display = "none";
      list.classList.toggle("display");
    } else {
      list.style.display = "block";
      list.classList.toggle("display");
    }

    console.log(this.navigator);
  }

  render() {
    return (
      <header>
        <Profile />

        <button
          className="navigator--displayer bg"
          onClick={() => this.handleClick()}
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul ref={this.navigator} className="navigator bg">
          <Link to={"/dashboard"}>
            <li className="navigator--item">
              <i className="fas fa-tasks"></i> Dashboard
            </li>
          </Link>
          <Link to={"/history"}>
            <li className="navigator--item">
              <i className="fas fa-history"></i> History
            </li>
          </Link>
          <Link to={"/progress"}>
            <li className="navigator--item">
              <i className="fas fa-chart-bar"></i> Progress
            </li>
          </Link>
          <Link to={"/schedule"}>
            <li className="navigator--item">
              <i className="fas fa-calendar-day"></i> Schedule
            </li>
          </Link>
          <Link to={"/setting"}>
            <li className="navigator--item">
              <i className="fas fa-cogs"></i> Setting
            </li>
          </Link>
          <Link to={"/log-out"}>
            <li className="navigator--item">
              <i className="fas fa-door-open"></i> Log out
            </li>
          </Link>
        </ul>
      </header>
    );
  }
}
