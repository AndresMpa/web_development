import RouterSwitcher from "./router/router";
import TaskAdder from "./utility/taskAdder";
import Navigator from "./utility/navigator";
import Tags from "./utility/tags";

import "./assent/style/basic.css";
import "./assent/style/app.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <section className="app">
        <article className="btn">
          <Tags />
        </article>
        <article className="nav">
          <Navigator />
        </article>
        <article className="ctn">
          <RouterSwitcher />
        </article>
        <article className="frm">
          <TaskAdder/>
        </article>
      </section>
    </Router>
  );
}

export default App;
