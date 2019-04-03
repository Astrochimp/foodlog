import React from 'react'
import { connect } from 'react-redux'
import { saveFood } from '../actions'

const FoodDetail = (props) => {
  console.log('props', props)

  return(
    <div data-testid='foodlog-detail' className='foodlog--details'>
      {props.food &&
        <div>
          <h2 data-testid='foodlog-name'>{props.food.name}</h2>
          <div data-testid='foodlog-brand'>Brand: { props.food.brand }</div>
          <div data-testid='foodlog-calories'>Calories: { props.food.calories }</div>
          <div data-testid='foodlog-portion'>Portion: { props.food.portion }</div>

          <button onClick={() => props.saveFood(props.food)}>Add</button>
        </div>
      }
    </div>
  )
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
