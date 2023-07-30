import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import "./counter.scss";

const Counter = () => {
  const [bcolor, setBColor] = useState("white");
  let ran = Math.floor(Math.random() * 3);
  let i1 = Math.floor(Math.random() * 3);
  console.log(ran == i1);
  const changeColor = (i) => {
    let colors = ["red", "blue", "white"];
    setBColor(colors[i]);
  };

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addedValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="section">
      <div className="counter-page-wrapper">
        <p className="number">{count}</p>
        <div className="counting">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div className="reset-group">
          <button onClick={() => dispatch(incrementByAmount(addedValue))}>
            Add Amount
          </button>
          <input
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button onClick={() => dispatch(resetAll)}>Reset</button>
        </div>
      </div>
      <aside className="color-page-wrapper">
        <div
          className="color-box"
          onClick={() => changeColor(3)}
          style={{ backgroundColor: bcolor }}
        ></div>
        <div
          className="color-box"
          onClick={() => changeColor(i1)}
          style={{ backgroundColor: bcolor }}
        ></div>
      </aside>
    </section>
  );
};
export default Counter;
