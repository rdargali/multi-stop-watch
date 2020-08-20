import React, { Component } from "react";
import Stopwatch from "./components/Stopwatch";
import Dropdown from "./components/Dropdown";

export class App extends Component {
  render() {
    return (
      <div>
        <Dropdown />
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
      </div>
    );
  }
}

export default App;
