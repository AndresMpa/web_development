import React, { Component } from "react";
import "../styles/index.css";

export default class LinkImage extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg",
      description: "Este es texto de relleno",
      link: "Algo",
    };
  }

  render() {
    return (
      <article className="">
        <img src={this.state.img} alt="fondo" />
        <div>
          <p>{this.state.description}</p>
        </div>
        <a href="/">
          <button>{this.state.link}</button>
        </a>
      </article>
    );
  }
}
