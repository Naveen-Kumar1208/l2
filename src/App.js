import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
import CounterComponent from "./components/CounterComponent";
import DisplayMessageComponent from "./components/DisplayMessageComponent";

function App() {
  const { count, message } = useSelector((state) => state.counter);
  // const message = useSelector((state) => state.counter.message);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <CounterComponent
        count={count}
        increment={() => dispatch(increment())}
        decrement={() => dispatch(decrement())}
      />
      <DisplayMessageComponent message={message} />
    </div>
  );
}

export default App;
