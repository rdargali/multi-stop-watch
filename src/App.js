import React, { Component } from "react";
import Stopwatch from "./components/Stopwatch";
import Dropdown from "./components/Dropdown";

export class App extends Component {
  state = {
    stopwatches: 0,
  };

  render() {
    const setStopwatches = (n) => {
      this.setState({
        stopwatches: n,
      });
    };

    let stopWatchesArr = [];

    for (let i = 0; i < this.state.stopwatches; i++) {
      stopWatchesArr = [...stopWatchesArr, i];
    }

    const stopWatches = (
      <div>
        {stopWatchesArr.map((n) => (
          <Stopwatch key={n} />
        ))}
      </div>
    );

    return (
      <>
        <Dropdown setStopwatches={setStopwatches} />
        {stopWatches}
      </>
    );
  }
}

export default App;
