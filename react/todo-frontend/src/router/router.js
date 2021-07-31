import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "../component/dashboard";
import EditStudent from "../component/edit-student.component";
import StudentList from "../component/student-list.component";

export default class RouterSwitcher extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/edit-student/:id" component={EditStudent} />
        <Route path="/student-list" component={StudentList} />
      </Switch>
    );
  }
}
