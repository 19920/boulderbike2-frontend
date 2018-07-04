import React, { Component } from 'react';
import './App.css';
import Rider from './components/Rider'



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Rider />
      </div>
    );
  }
}

export default App;
