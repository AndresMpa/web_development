import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../assent/style/navigator.css";
import "../assent/style/profile.css";
import "../assent/style/basic.css";

export default class Navigator extends Component {
  render() {
    return (
      <header>

        <div className="profile bg">
          <img src="../assent/img/profile.png" alt="avatar" srcSet="../assent/img/profile.png"/>
        </div>

        <br />

        <ul className="navigator bg">
          <Link to={"/dashboard"}>
            <li className="navigator--item"><i class="fas fa-tasks"></i> Dashboard</li>
          </Link>
          <Link to={"/history"}>
            <li className="navigator--item"><i class="fas fa-history"></i> History</li>
          </Link>
          <Link to={"/progress"}>
            <li className="navigator--item"><i class="fas fa-chart-bar"></i> Progress</li>
          </Link>
          <Link to={"/schedule"}>
            <li className="navigator--item"><i class="fas fa-calendar-day"></i> Schedule</li>
          </Link>
          <Link to={"/setting"}>
            <li className="navigator--item"><i class="fas fa-cogs"></i> Setting</li>
          </Link>
          <Link to={"/log-out"}>
            <li className="navigator--item"><i class="fas fa-door-open"></i> Log out</li>
          </Link>
        </ul>

      </header>
    );
  }
}
