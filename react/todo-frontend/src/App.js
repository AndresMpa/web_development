import "./assent/style/basic.css";
//import RouterApp from "./router/routerApp";
import Main from "./view/Todo"

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <section>
        <Main />
      </section>
    </Router>
  );
}

export default App;
