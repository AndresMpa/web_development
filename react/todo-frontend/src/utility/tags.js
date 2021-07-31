import React, { Component } from "react";

import "../assent/style/basic.css"
import "../assent/style/tags.css"

export default class Tags extends Component {
  render() {
    return (
      <ul className="tags">
        <li className="tags--button">
          <button className="tags--button__tag">
            <i class="fas fa-calendar-day"></i> Today
          </button>
        </li>
        <li className="tags--button">
          <button className="tags--button__tag">
            <i class="fas fa-book-open"></i> All
          </button>
        </li>
        <li className="tags--button">
          <button className="tags--button__tag">
            <i class="fas fa-stopwatch"></i> Scheduled
          </button>
        </li>
      </ul>
    );
  }
}
