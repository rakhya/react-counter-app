import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        product: {
          id: 1,
          price: 100,
        },
        value: 2,
        selected: true,
      },
      {
        id: 2,
        product: {
          id: 2,
          price: 20,
        },
        value: 6,
        selected: false,
      },
      {
        id: 3,
        product: {
          id: 3,
          price: 500,
        },
        value: 5,
        selected: false,
      },
      {
        id: 4,
        product: {
          id: 4,
          price: 150,
        },
        value: 1,
        selected: false,
      },
      {
        id: 5,
        product: {
          id: 5,
          price: 300,
        },
        value: 0,
        selected: false,
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            product={c.product}
            value={c.value}
            selected={c.selected}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
