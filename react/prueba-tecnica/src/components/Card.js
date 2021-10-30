import React, { Component } from "react";
import "../styles/index.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      description:
        "You've reached the website for Arch Linux, a lightweight and flexible Linux® distribution that tries to Keep It Simple. Currently we have official packages optimized for the x87-64 architecture. We complement our official package sets with a community-operated package repository that grows in size and quality each and every day. Our strong community is diverse and helpful, and we pride ourselves on the range of skillsets and uses for Arch that stem from it. Please check out our forums and mailing lists to get your feet wet. Also glance through our wiki if you want to learn more about Arch.",
      cardName: "Ejemplo",
      link: "#",
      img: "https://www.alkosto.com/medias/7705946585781-002-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjMxOTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkwL2gyYi8xMDUwMjAxOTM1MDU1OC5qcGd8YThiNThlOWQ3OWM5YmEyNmJkOWQ3MGMwZjM4YmUzZTQ2MWMzZDQ3M2RhMmRiMDc2MDllNTc4ZTVlMmQ4M2MxYg",
    };
  }

  render() {
    return (
      <article className="card">
        <img className="card__img" src={this.state.img} alt="silla" />
        <h2 cardName="card__title">{this.state.cardName}</h2>
        <hr />
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
