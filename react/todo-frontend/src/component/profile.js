import React, { Component } from "react";

import profile from "../assent/img/profile.png";
import "../assent/style/profile.css";

export default class Profile extends Component {
  render() {
    return (
      <article className="profile bg">
        <div className="profile--container">
          <img
            alt="avatar"
            src={profile}
            srcSet={profile}
            className="profile--container__image"
          />
        </div>
      </article>
    );
  }
}
