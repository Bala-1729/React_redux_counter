import React, { Component } from 'react';
import './App.css';
import Counter from '../src/container/appContainer';

class App extends Component {
   render() {
      return (
         <div className = "App">
            <div className="heading"><h2>Counter</h2></div>
            <header className = "App-header">
               <Counter/>
            </header>
         </div>
      );
   }
}
export default App;