import React from "react";

function CounterComponent({ count, increment, decrement }) {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterComponent;
