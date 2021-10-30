import React, { Component } from "react";
import "../styles/index.css";

export default class Banner extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      img: "https://thumbs.dreamstime.com/b/luz-brillante-abstracta-y-part%C3%ADculas-din%C3%A1micas-que-fluyen-en-fondo-de-banner-morado-oscuro-imagen-para-dise%C3%B1o-web-plantilla-162405597.jpg",
      description: "Este es texto de relleno",
      link: "Algo",
    };
  }

  render() {
    return (
      <article className="banner">
        <img src={this.state.img} alt="fondo" className="banner__img" />
        <div cardName="banner--info">
          <p>{this.state.description}</p>

          <a href="/">
            <button>{this.state.link}</button>
          </a>
        </div>
      </article>
    );
  }
}
