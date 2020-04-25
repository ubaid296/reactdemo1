import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    const handleDecrement = () => {
      let count = this.state.count;
      if (count > 0) count--;
      this.setState({ count: count });
    };
    const handleIncrement = () => {
      let count = this.state.count;
      count++;
      this.setState({ count: count });
    };
    return (
      <div className="row m-5">
        <button
          className="btn btn-counter btn-danger"
          onClick={handleDecrement}
        >
          -
        </button>
        <p style={{ marginLeft: 20, marginRight: 20, paddingTop: 5 }}>
          {this.state.count}
        </p>
        <button
          className="btn btn-counter btn-primary"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
