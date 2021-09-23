import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counters } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => {
              onIncrement(counter);
            }}
            onDecrement={() => {
              onDecrement(counter);
            }}
            onDelete={() => {
              onDelete(counter.id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
