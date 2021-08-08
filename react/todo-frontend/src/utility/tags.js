import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assent/style/basic.css";
import "../assent/style/tags.css";

export default class Tags extends Component {
  render() {
    return (
      <ul className="tags">
        <li className="tags--button">
          <Link to={"/today"}>
            <button className="tags--button__tag">
              <i className="fas fa-calendar-day"></i> Today
            </button>
          </Link>
        </li>
        <li className="tags--button">
          <Link to={"/scheduled"}>
            <button className="tags--button__tag">
              <i className="fas fa-book-open"></i> All
            </button>
          </Link>
        </li>
        <li className="tags--button">
          <Link to={"/all"}>
            <button className="tags--button__tag">
              <i className="fas fa-stopwatch"></i> Scheduled
            </button>
          </Link>
        </li>
      </ul>
    );
  }
}
