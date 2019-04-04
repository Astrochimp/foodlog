import React, { Component } from 'react';
import Day from './Day'
import Modal from './Modal'
import '../_assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className='pizza'>
            <span aria-label='Food or Pizza' role='img'>🍕</span>
          </div>
          <h1>
            Tracker
          </h1>
        </header>
        <Day />
        <Modal />
      </div>
    );
  }
}

export default App;
