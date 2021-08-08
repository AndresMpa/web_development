import React, { Component } from "react";
import "../assent/style/item.css";
import Api from "../api/index";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      list: [],
      name: "",
    };
  }

  componentDidMount() {
    Api.get("/test/list")
      .then((res) => {
        this.setState({
          name: res.data.user,
          list: res.data.list,
        });
      })
      .catch((err) => {
        console.log("Algo salio mal, el error es: " + err);
      });
  }

  handleClick() {
    console.log(this.state.list);
  }

  render() {
    const tasks = [];
    const username = this.state.name;

    for (let task of this.state.list) {
      tasks.push(
        <li className="item" key={task}>
          <i className="fas fa-tasks"></i> {task}
        </li>
      );
    }

    return (
      <article className="dashboard">
        <h2 onClick={() => this.handleClick()}>@{username} list</h2>
        <hr />
        <ul>{tasks}</ul>
      </article>
    );
  }
}
