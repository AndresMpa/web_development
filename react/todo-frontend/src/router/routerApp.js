import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Login from "../view/Login";
import Main from "../view/Todo";

export default class RouterSwitcher extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    );
  }
}
