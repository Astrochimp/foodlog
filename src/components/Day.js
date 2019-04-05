import React, { Component } from 'react'
import dateFns from 'date-fns'
import { connect } from 'react-redux'
import { addMeal, nextDay, prevDay, setToday, finishDay } from '../actions/index';
import MealSection from './MealSection'

class Day extends Component {

  state = {
    currentDay: '',
    meal: '',
    food: {},
    formattedDate: '',
    filterFoods: [],
    completeDay: false,
    totalCals: 0,
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
    message: ''
  }

  setToday = () => {
    this.props.setToday()
  }

  nextDay = () => {
    this.props.nextDay(this.props.currentDay)
  }

  prevDay = () => {
    this.props.prevDay(this.props.currentDay)
  }

  checkMeal = (meal) => {
    switch (meal) {
      case 'Breakfast':
        if ((this.state.lunch.length > 0) ||
          (this.state.snack.length > 0) ||
          (this.state.dinner.length > 0)) {
            return false
        }
        return true
      case 'Lunch':
        if ((this.state.snack.length > 0) ||
          (this.state.dinner.length > 0)) {
            return false
        }
        return true
      case 'Snack':
        if (this.state.dinner.length > 0) {
            return false
        }
        return true
      default:
        return true
    }
  }

  clickMeal = (meal) => {
    if (!this.state.completeDay) {
      if (this.checkMeal(meal)) {
        this.props.addMeal(meal)
      } else {
        this.setState({
          message: '⚠️ Sorry, cannot go back to add more.'
        })
        this.clearMessage()
      }
    } else {
      this.setState({
        message: '⚠️ Sorry, day is complete!'
      })
      this.clearMessage()
    }
  }

  clearMessage = () => {
    setTimeout(() => {
      this.setState({
        message: ''
      })
    }, 3000)
  }

  doneEating = () => {
    this.props.finishDay(this.props.currentDay)
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    const { currentDay } = nextProps
    const dateFormat = 'MMMM D, YYYY'
    const formattedDate = dateFns.format(currentDay, dateFormat)

    let foodList = []

    if (nextProps.mealList.length <= 0) {
      foodList = JSON.parse(localStorage.getItem('foods')) || []
    } else {
      foodList = nextProps.mealList
    }

    const filterFoods = foodList.filter(item => dateFns.isSameDay(item.day, currentDay))
    let completeDay = filterFoods.length >= 1 ? filterFoods[0].complete : false

    let mealDay = []

    if (filterFoods.length === 1) {
      mealDay = filterFoods[0].foods
    }

    let totalCals = mealDay.reduce((calories, food) => {
      return calories + food.food.calories
    }, 0)

    let breakfast = mealDay.filter(food => food.meal === 'Breakfast')
    let lunch = mealDay.filter(food => food.meal === 'Lunch')
    let dinner = mealDay.filter(food => food.meal === 'Dinner')
    let snack = mealDay.filter(food => food.meal === 'Snack')

    return({
      currentDay,
      formattedDate,
      filterFoods,
      completeDay,
      totalCals,
      breakfast,
      lunch,
      dinner,
      snack
    })

  }

  componentDidMount() {
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
    let completeDay = filterFoods.length >= 1 ? filterFoods[0].complete : false


    let mealDay = []

    if (filterFoods.length === 1) {
      mealDay = filterFoods[0].foods
    }

    let totalCals = mealDay.reduce((calories, food) => {
      return calories + food.food.calories
    }, 0)

    let breakfast = mealDay.filter(food => food.meal === 'Breakfast')
    let lunch = mealDay.filter(food => food.meal === 'Lunch')
    let dinner = mealDay.filter(food => food.meal === 'Dinner')
    let snack = mealDay.filter(food => food.meal === 'Snack')

    this.setState({
      currentDay,
      formattedDate,
      filterFoods,
      completeDay,
      totalCals,
      breakfast,
      lunch,
      dinner,
      snack
    })
  }

  render () {

    return (
      <div className='dayview--wrapper'>
        <div className='date-nav'>
          <div className='date-prev'
            title='Previous Day'
            onClick={this.prevDay}>
            &larr;
          </div>
          <div className='current-day'>
            <h3>{this.state.formattedDate}</h3>
          </div>
          <div className='date-next'
            title='Previous Day'
            onClick={this.nextDay}>
            &rarr;
          </div>
        </div>

        <div className='click-today' onClick={this.setToday}>Back to Today</div>

        {this.state.completeDay &&
          <div className='finished'>Completed Day!</div>
        }

        <div className='options-toolbar'>
          {!this.state.completeDay && 
            <button onClick={this.doneEating}>I'm Done Eating</button>
          }
        </div>

        {this.state.message && 
          <div className='message'>{this.state.message}</div>
        }

        <div className='meals'>
          <MealSection
            clickMeal={this.clickMeal}
            mealName='Breakfast'
            mealList={this.state.breakfast} />
          <MealSection
            clickMeal={this.clickMeal}
            mealName='Lunch'
            mealList={this.state.lunch} />
          <MealSection
            clickMeal={this.clickMeal}
            mealName='Snack'
            mealList={this.state.snack} />
          <MealSection
            clickMeal={this.clickMeal}
            mealName='Dinner'
            mealList={this.state.dinner} />
        </div>
        <div className='calories-toolbar'>
          Total Calories: {this.state.totalCals}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    currentDay: state.currentDay,
    mealList: state.mealList,
    complete: state.complete
  }),{
    addMeal,
    nextDay,
    prevDay,
    setToday,
    finishDay
  }
)(Day)
