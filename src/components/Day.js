import React, { Component } from 'react'
import dateFns from 'date-fns'
import { connect } from 'react-redux'
import { addMeal } from '../actions/index';

class Day extends Component {

  state = {
    currentDay: this.props.currentDay,
    meal: '',
    food: {}
  }

  clickMeal = (meal) => {
    this.props.addMeal(meal)
  }

  render () {
    const { currentDay } = this.props
    const dateFormat = 'MMMM D, YYYY'
    const formattedDate = dateFns.format(currentDay, dateFormat)
    const foodList = this.props.mealList

    return (
      <div className='dayview--wrapper'>
        <h3>{formattedDate}</h3>

        <div className='meals'>
          <div className='mealtime' onClick={() => this.clickMeal('Breakfast')}>Breakfast</div>
          <div className='mealtime' onClick={() => this.clickMeal('Lunch')}>Lunch</div>
          <div className='mealtime' onClick={() => this.clickMeal('Dinner')}>Dinner</div>
          <div className='mealtime' onClick={() => this.clickMeal('Snack')}>Snack</div>
        </div>
        {foodList.map((food, ind) => {
          return(
            <div key={ind}>
              {food.meal}<br />
              {food.food.name}<br />
              {food.food.calories}<br />
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    currentDay: state.currentDay,
    mealList: state.mealList
  }),{
    addMeal
  }
)(Day)
