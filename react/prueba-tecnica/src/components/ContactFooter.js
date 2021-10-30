import React, { Component } from "react";
import "../styles/index.css";

export default class ContactFooter extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <article className="footer--card">
          <h2 className="footer--card__title">Titulo de ejemplo</h2>
          <p>
            You've reached the website for Arch Linux, a lightweight and
            flexible Linux® distribution that tries to Keep It Simple. Currently
            we have official packages optimized for the x86-64 architecture. We
            complement our official package sets with a community-operated
            package repository that grows in size and quality each and every
            day. Our strong community is diverse and helpful, and we pride
            ourselves on the range of skillsets and uses for Arch that stem from
            it. Please check out our forums and mailing lists to get your feet
            wet. Also glance through our wiki if you want to learn more about
            Arch.
          </p>
        </article>
        <article className="footer--card">
          <h2 className="footer--card__title">Titulo de ejemplo</h2>
          <p>
            You've reached the website for Arch Linux, a lightweight and
            flexible Linux® distribution that tries to Keep It Simple. Currently
            we have official packages optimized for the x86-64 architecture. We
            complement our official package sets with a community-operated
            package repository that grows in size and quality each and every
            day. Our strong community is diverse and helpful, and we pride
            ourselves on the range of skillsets and uses for Arch that stem from
            it. Please check out our forums and mailing lists to get your feet
            wet. Also glance through our wiki if you want to learn more about
            Arch.
          </p>
        </article>
        <article className="footer--card">
          <h2 className="footer--card__title">Titulo de ejemplo</h2>
          <p>
            You've reached the website for Arch Linux, a lightweight and
            flexible Linux® distribution that tries to Keep It Simple. Currently
            we have official packages optimized for the x86-64 architecture. We
            complement our official package sets with a community-operated
            package repository that grows in size and quality each and every
            day. Our strong community is diverse and helpful, and we pride
            ourselves on the range of skillsets and uses for Arch that stem from
            it. Please check out our forums and mailing lists to get your feet
            wet. Also glance through our wiki if you want to learn more about
            Arch.
          </p>
        </article>
        <article className="footer--card">
          <h2 className="footer--card__title">Titulo de ejemplo</h2>
          <input className="footer--card__input" placeholder="Contactenos" />
          <hr />
          <p>
            You've reached the website for Arch Linux, a lightweight and
            flexible Linux® distribution that tries to Keep It Simple. Currently
            we have official packages optimized for the x86-64 architecture.
          </p>
          <i class="fab fa-whatsapp"></i>
        </article>
      </footer>
    );
  }
}
