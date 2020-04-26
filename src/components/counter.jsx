import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div key={this.props.data.id} className="row m-5">
        <button
          className="btn btn-counter btn-danger"
          onClick={() => this.props.handleDecrement(this.props.data)}
        >
          -
        </button>
        <p style={{ marginLeft: 20, marginRight: 20, paddingTop: 5 }}>
          {this.props.data.count}
        </p>
        <button
          className="btn btn-counter btn-primary"
          onClick={() => this.props.handleIncrement(this.props.data)}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
