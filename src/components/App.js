import React, { Component } from 'react';
import FoodSearch from './FoodSearch'
import FoodList from './FoodList'
import FoodDetail from './FoodDetail'
import '../_assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Food Log</h1>
        </header>
        <div className='foodlog--layout'>
          <div>
            <FoodSearch />
            <FoodList />
          </div>
          <FoodDetail />
        </div>
      </div>
    );
  }
}

export default App;
