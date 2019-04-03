import React from 'react'
import dateFns from 'date-fns'
import FoodSearch from './FoodSearch'
import FoodList from './FoodList'
import FoodDetail from './FoodDetail'
import { connect } from 'react-redux'

const Food = (props) => {
  const dateFormat = 'MMMM Do'
  const formattedDate = dateFns.format(props.currentDay, dateFormat)

  return (
    <div className='foodlog--layout'>
      <div>{formattedDate} {props.currentMeal}</div>
      <div>
        <FoodSearch />
        <FoodList />
      </div>
      <FoodDetail />
    </div>
  )
}


export default connect(
  (state) => ({
    currentDay: state.currentDay,
    currentMeal: state.currentMeal,
    mealList: state.mealList
  })
)(Food)
