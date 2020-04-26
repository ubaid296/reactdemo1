import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counter: [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
      { id: 5, count: 0 },
    ],
    itemCount: 0,
  };
  render() {
    const handleDecrement = (data) => {
      let { counter, itemCount } = this.state;
      const index = counter.indexOf(data);
      if (counter[index].count > 0) {
        counter[index].count--;
        let count = counter[index].count;
        if (count === 0) {
          itemCount--;
        }
      }
      this.setState({ itemCount: itemCount, counter: counter });
    };
    const handleIncrement = (data) => {
      let { counter, itemCount } = this.state;
      const index = counter.indexOf(data);
      let count = counter[index].count;
      if (count === 0) {
        itemCount++;
      }
      counter[index].count++;
      this.setState({ itemCount: itemCount, counter: counter });
    };
    return (
      <div>
        <nav
          style={{ background: "#0554a9", color: "#fff" }}
          className="navbar "
        >
          <p style={{ paddingTop: 10 }}>Count</p>
          <span
            className="badge badge-pill badge-dark"
            style={{ fontSize: 20 }}
          >
            {this.state.itemCount}
          </span>
        </nav>
        {this.state.counter.map((c) => (
          <Counter
            key={c.id}
            data={c}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
