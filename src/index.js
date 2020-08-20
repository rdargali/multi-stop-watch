import React from "react";
import ReactDOM from "react-dom";
import Stopwatch from "./components/Stopwatch";
import Dropdown from "./components/Dropdown";

ReactDOM.render(
  <React.StrictMode>
    <Dropdown />
    <Stopwatch />
  </React.StrictMode>,
  document.getElementById("root")
);
