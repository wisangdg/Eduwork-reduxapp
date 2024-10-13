import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/CounterSlice";

function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} className="btn">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="btn">
        -
      </button>
    </div>
  );
}

export default CounterComponent;
