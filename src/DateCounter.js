import { useState, useReducer } from "react";

const initial = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "dec": return {...state , count : state.count - state.step}
    case "inc": return {...state , count : state.count + state.step}
    case "defineCount": return {...state,count : action.payload}
    case "reset": return initial
    case "defineStep": return {...state,step : action.payload}
    default:
      throw new Error("unknown action");
  }
}

function DateCounter() {
  
  const [state, dispatch] = useReducer(reducer, initial);
  const { step, count } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    ///setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    //setCount(Number(e.target.value));
    dispatch({ type: "defineCount", payload: e.target.value });
  };

  const defineStep = function (e) {
    dispatch({type : "defineStep",payload : Number(e.target.value)});
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
