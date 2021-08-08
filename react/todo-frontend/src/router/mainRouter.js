import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../component/dashboard";
import History from "../component/history";
import Progress from "../component/progress";
import Schedule from "../component/schedule";
import Setting from "../component/setting";
import LogOut from "../component/log-out";

import Today from "../component/log-out";
import Scheduled from "../component/log-out";
import All from "../component/log-out";

import AddTask from "../component/log-out";
//const Dashboard = React.lazy(() => import("../component/history"))

export default class RouterSwitcher extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/history" component={History} />
        <Route path="/progress" component={Progress} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/setting" component={Setting} />
        <Route path="/log-out" component={LogOut} />

        <Route path="/today" component={Today} />
        <Route path="/scheduled" component={Scheduled} />
        <Route path="/all" component={All} />

        <Route path="/add-task" component={AddTask} />
      </Switch>
    );
  }
}
