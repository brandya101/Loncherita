import React, { Component } from 'react';
import './App.css';
import Yelp from './Yelp';

// all component should have a render function
// render means showing something function & what is the component showing me
class App extends Component {
  render() {
    return (
      <div className="App">
       <Yelp />
      </div>
    );
  }
}

export default App;
