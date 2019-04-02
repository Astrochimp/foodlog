import React, { Component } from 'react'
import { connect } from 'react-redux'
import { foodDetail } from '../actions'

class FoodCard extends Component {

  handleClick = (e, food) => {
    e.preventDefault()
    this.props.foodDetail(food)
  }

  render() {
    const { food } = this.props

    return (
      <div className='foodlog--list-item'
        data-testid='foodlog--list-item'
        onClick={(e) => this.handleClick(e, food)}>
        {food.name}
      </div>
    )
  }
}

export default connect(
  (state) => ({ foods: state.foods }),
  { foodDetail }
)(FoodCard)
