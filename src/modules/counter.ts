const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE/BY" as const;

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

type Action =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

function CounterReducer(state = initialState, action: Action) {
  if (action.type === INCREASE) {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === DECREASE) {
    return {
      count: state.count - 1,
    };
  }

  if (action.type === INCREASE_BY) {
    return {
      count: state.count + action.payload,
    };
  }

  return state;
}

export default CounterReducer;
