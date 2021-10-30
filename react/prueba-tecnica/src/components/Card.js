import React, { Component } from "react";
import "../style/card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      description: "",
      cardName: "",
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
