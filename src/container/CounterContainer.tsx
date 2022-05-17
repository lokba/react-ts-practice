import React, { useEffect } from "react";
import Counter from "../component/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, increaseBy } from "../modules/counter";
import { RootState } from "../modules/index";

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.CounterReducer.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
};

export default CounterContainer;
