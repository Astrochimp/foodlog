import React, { Component } from 'react';
import Day from './Day'
import Modal from './Modal'
import '../_assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Food Log</h1>
        </header>
        <Day />
        <Modal />
      </div>
    );
  }
}

export default App;
