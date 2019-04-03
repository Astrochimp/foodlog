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
    console.log('meal', meal)
    this.props.addMeal('meal')
  }

  render () {
    const { currentDay } = this.props
    const dateFormat = 'MMMM D, YYYY'
    const formattedDate = dateFns.format(currentDay, dateFormat)


    return (
      <div className='dayview--wrapper'>
        <h3>{formattedDate}</h3>

        <div className='meals'>
          <ul>
            <li onClick={() => this.clickMeal('breakfast')}>Breakfast</li>
            <li onClick={() => this.clickMeal('lunch')}>Lunch</li>
            <li onClick={() => this.clickMeal('dinner')}>Dinner</li>
            <li onClick={() => this.clickMeal('snacks')}>Snacks</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    currentDay: state.currentDay
  }),{
    addMeal
  }
)(Day)
