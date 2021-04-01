import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  render() {
    const {
      counter,
      results,
      increment,
      decrement,
      addcounter,
      subcounter,
      addresults
    } = this.props;

    const items = results.map (item => {
        return (
            <><div className="result">{item}</div></>
        );
    })
    return (
      <div className="App">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addcounter}>Add 10</button>
        <button onClick={subcounter}>Subtract 10</button>
        <br />
        <br />
        <div className="result">{counter}</div>
        <hr />
        <button onClick={() => addresults(counter)}>Store Counter</button>
        <br/><br/>
        {items}
      </div>
    );
  }
}
export default Counter;
