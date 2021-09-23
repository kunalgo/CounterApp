import React, { Component } from "react";

class Counter extends Component {
  getBadge = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  getCount = () => {
    let { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  };

  render() {
    return (
      <div>
        <span className={this.getBadge()}>{this.getCount()}</span>

        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>

        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
