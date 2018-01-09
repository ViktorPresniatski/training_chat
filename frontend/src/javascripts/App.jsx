import React, { Component } from 'react';
import '../stylesheets/App.css';
import TestComponent from './components/TestComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestComponent />
      </div>
    );
  }
}

export default App;
