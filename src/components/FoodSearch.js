import React, { Component } from 'react'
import {connect} from 'react-redux'
import { searchFood } from '../actions'

class FoodSearch extends Component {
  state = {
    searchText: ''
  }

  searchFood = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.searchFood(this.state.searchText)
  }

  render() {
    return (
      <div className='search--form'>
        <form onSubmit={this.submitForm}>
        <input type='text'
            name='searchForm'
            value={this.state.searchText}
            onChange={this.searchFood}
            placeholder='Search' />
          <button onClick={this.submitForm}>Search</button>
        </form>
      </div>
    )
  }
}

export default connect(
  (state) => ({ searchText: state.searchText }),
  {
    searchFood
  }
)(FoodSearch)
