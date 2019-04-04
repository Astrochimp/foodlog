import React, { Component } from 'react'
import dateFns from 'date-fns'
import { connect } from 'react-redux'
import { addMeal } from '../actions/index';
import MealSection from './MealSection'

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

    let totalCals = mealDay.reduce((calories, food) => {
      console.log('food', food)
      return calories + food.food.calories
    }, 0)

    let breakfast = mealDay.filter(food => food.meal === 'Breakfast')
    let lunch = mealDay.filter(food => food.meal === 'Lunch')
    let dinner = mealDay.filter(food => food.meal === 'Dinner')
    let snack = mealDay.filter(food => food.meal === 'Snack')

    return (
      <div className='dayview--wrapper'>
        <h3>{formattedDate}</h3>
        <div>
          Total Calories: {totalCals}
        </div>
        <div className='meals'>

          <MealSection
            clickMeal={this.clickMeal}
            mealName='Breakfast'
            mealList={breakfast} />
          <MealSection
            clickMeal={this.clickMeal}
            mealName='Lunch'
            mealList={lunch} />
          <MealSection
            clickMeal={this.clickMeal}
            mealName='Dinner'
            mealList={dinner} />
          <MealSection
            clickMeal={this.clickMeal}
            mealName='Snack'
            mealList={snack} />

        </div>
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
