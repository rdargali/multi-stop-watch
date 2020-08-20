import React from "react";
import "../App.css";

const Dropdown = ({ setStopwatches }) => {
  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">Number of Stopwatches</button>
        <ul className="dropdown-content">
          <li onClick={() => setStopwatches(1)}>1</li>
          <li onClick={() => setStopwatches(2)}>2</li>
          <li onClick={() => setStopwatches(3)}>3</li>
          <li onClick={() => setStopwatches(4)}>4</li>
          <li onClick={() => setStopwatches(5)}>5</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
