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

  handleDecrement = (data) => {
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

  handleIncrement = (data) => {
    let { counter, itemCount } = this.state;
    const index = counter.indexOf(data);
    let count = counter[index].count;
    if (count === 0) {
      itemCount++;
    }
    counter[index].count++;
    this.setState({ itemCount: itemCount, counter: counter });
  };

  handleDelete = (data) => {
    let { counter, itemCount } = this.state; //object disrtucting
    counter = counter.filter((c) => c.id !== data.id);
    if (data.count > 0) {
      itemCount--;
    }
    this.setState({ counter, itemCount });
  };

  handleReset = () => {
    let { counter, itemCount } = this.state;
    itemCount = 0;
    for (let i = 0; i < counter.length; i++) {
      counter[i].count = 0;
    }
    this.setState({ counter, itemCount });
  };

  render() {
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
        <div className="row m-4">
          <button className="btn btn-dark" onClick={this.handleReset}>
            Reset
          </button>
        </div>
        {this.state.counter.map((c) => (
          <Counter
            key={c.id}
            data={c}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
