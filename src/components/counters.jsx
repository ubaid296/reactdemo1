import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <nav
          style={{ background: "#0554a9", color: "#fff" }}
          className="navbar "
        >
          <p style={{ paddingTop: 10 }}>Count</p>
        </nav>
        <Counter />
      </div>
    );
  }
}

export default Counters;
