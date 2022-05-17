import { combineReducers } from "redux";
import CounterReducer from "./counter";

const rootReducer = combineReducers({ CounterReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
