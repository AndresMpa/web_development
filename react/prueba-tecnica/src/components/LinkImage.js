import React, { Component } from "react";
import "../style/linkImage.css";

export default class LinkImage extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      description: "",
      link: "",
    };
  }

  render() {
    return (
      <article className="">
        <h2>{cardName}</h2>
        <hr />
        <div>
          <p>{description}</p>
        </div>
        <a href="#">
          <button>{link}</button>
        </a>
      </article>
    );
  }
}
