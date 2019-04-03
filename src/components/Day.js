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
    let foodList = []

    if (this.props.mealList.length <= 0) {
      foodList = JSON.parse(localStorage.getItem('foods')) || []
    } else {
      foodList = this.props.mealList
    }

    const filterFoods = foodList.filter(item => dateFns.isSameDay(item.day, currentDay))

    let mealDay = []

    if (filterFoods.length === 1) {
      mealDay = filterFoods[0].foods
    }

    return (
      <div className='dayview--wrapper'>
        <h3>{formattedDate}</h3>

        <div className='meals'>
          <div className='mealtime' onClick={() => this.clickMeal('Breakfast')}>Breakfast</div>
          <div className='mealtime' onClick={() => this.clickMeal('Lunch')}>Lunch</div>
          <div className='mealtime' onClick={() => this.clickMeal('Dinner')}>Dinner</div>
          <div className='mealtime' onClick={() => this.clickMeal('Snack')}>Snack</div>
        </div>
        {mealDay.map((food, ind) => {
          return(
            <div key={ind}>
              <strong>{food.meal}</strong>
              <div>{food.food.name} {food.food.calories}</div>
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
