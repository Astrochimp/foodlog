import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveFood } from '../actions'


class FoodDetail extends Component {
  state = {
    quantity: 1
  }

  updateQuantity = (e) => {
    this.setState({
      quantity: e.target.value
    })
  }

  render() {
    const food = this.props.food
    return(
      <div data-testid='foodlog-detail' className='foodlog--details'>
        {food &&
          <div>
            <h2 data-testid='foodlog-name'>{food.name}</h2>
            <div data-testid='foodlog-brand'>Brand: { food.brand }</div>
            <div data-testid='foodlog-calories'>Calories: { food.calories }</div>
            <div data-testid='foodlog-portion'>Portion: { food.portion }</div>

            <div className='food-form'>
              <label htmlFor='quantity'>Qty:</label>
              <select name='quantity'
                value={this.state.quantity}
                onChange={this.updateQuantity}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              <button onClick={() => this.props.saveFood(this.props.food, this.state.quantity)}>Add</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    food: state.food,
    mealList: state.mealList
  }),
  {
    saveFood
  }
)(FoodDetail)
