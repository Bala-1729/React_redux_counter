import { connect } from "react-redux";
import Counter from "../component/counter";
import {
  increment,
  decrement,
  addcounter,
  subcounter,
  addresults,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
    results: state.resultsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    addcounter: () => dispatch(addcounter()),
    subcounter: () => dispatch(subcounter()),
    addresults: (value) => dispatch(addresults(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
