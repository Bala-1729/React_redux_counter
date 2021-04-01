import { combineReducers } from "redux";
import {counterReducer} from "./reducers";
import {resultsReducer} from "./reducers";

const allReducers = combineReducers({
  counterReducer,
  resultsReducer,
});

export default allReducers;
