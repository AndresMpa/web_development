import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "../component/dashboard";
//const Dashboard = React.lazy(() => import("../component/history"))

export default class RouterSwitcher extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/history" component={Dashboard} />
        <Route path="/progress" component={Dashboard} />
        <Route path="/schedule" component={Dashboard} />
        <Route path="/setting" component={Dashboard} />
        <Route path="/log-out" component={Dashboard} />
      </Switch>
    );
  }
}
