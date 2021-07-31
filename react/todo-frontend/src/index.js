import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./service/reportWebVitals";
import * as serviceWorker from "./service/serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
