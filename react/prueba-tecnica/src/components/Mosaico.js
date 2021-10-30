import React, { Component } from "react";
import "../styles/index.css";

export default class Mosaico extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      img: [
        "https://thumbs.dreamstime.com/b/luz-brillante-abstracta-y-part%C3%ADculas-din%C3%A1micas-que-fluyen-en-fondo-de-banner-morado-oscuro-imagen-para-dise%C3%B1o-web-plantilla-162405597.jpg",
        "https://thumbs.dreamstime.com/b/luz-brillante-abstracta-y-part%C3%ADculas-din%C3%A1micas-que-fluyen-en-fondo-de-banner-morado-oscuro-imagen-para-dise%C3%B1o-web-plantilla-162405597.jpg",
        "https://thumbs.dreamstime.com/b/luz-brillante-abstracta-y-part%C3%ADculas-din%C3%A1micas-que-fluyen-en-fondo-de-banner-morado-oscuro-imagen-para-dise%C3%B1o-web-plantilla-162405597.jpg",
        "https://thumbs.dreamstime.com/b/luz-brillante-abstracta-y-part%C3%ADculas-din%C3%A1micas-que-fluyen-en-fondo-de-banner-morado-oscuro-imagen-para-dise%C3%B1o-web-plantilla-162405597.jpg",
      ],
    };
  }

  render() {
    return (
      <article className="mosaico">
        <div className="msc_1">
          <img src={this.state.img[1]} alt="fondo" />
        </div>
        <div className="msc_2">
          <img src={this.state.img[2]} alt="fondo" />
        </div>
        <div className="msc_3">
          <img src={this.state.img[3]} alt="fondo" />
        </div>
        <div className="msc_4">
          <img src={this.state.img[4]} alt="fondo" />
        </div>
        <div className="msc_5">
          <img src={this.state.img[5]} alt="fondo" />
        </div>
      </article>
    );
  }
}
