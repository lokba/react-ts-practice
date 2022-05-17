// import { useState, useReducer } from "react";

// type initState = {
//   count: number;
// };

// const initialState = {
//   count: 0,
// };

// type Action = { type: "increase" } | { type: "decrease" };

// function reducer(state: initState = initialState, action: Action) {
//   if (action.type === "increase") {
//     return {
//       count: state.count + 1,
//     };
//   }

//   if (action.type === "decrease") {
//     return {
//       count: state.count - 1,
//     };
//   }

//   return state;
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   console.log(state);

//   const onIncrease = () => dispatch({ type: "increase" });
//   const onDecrease = () => dispatch({ type: "decrease" });

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <div>
//         <button onClick={onIncrease}>+1</button>
//         <button onClick={onDecrease}>-1</button>
//       </div>
//     </div>
//   );
// }

// export default Counter;

type CounterProp = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

const Counter = ({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProp) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
};

export default Counter;
