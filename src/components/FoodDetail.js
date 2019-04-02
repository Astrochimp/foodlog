import React from 'react'
import { connect } from 'react-redux'

const FoodDetail = ({ food }) => {
  return(
    <div data-testid='foodlog-detail' className='foodlog--details'>
      {food &&
        <div>
          <h2 data-testid='foodlog-name'>{food.name}</h2>
          <div data-testid='foodlog-brand'>Brand: { food.brand }</div>
          <div data-testid='foodlog-calories'>Calories: { food.calories }</div>
          <div data-testid='foodlog-portion'>Portion: { food.portion }</div>
        </div>
      }
    </div>
  )
}

export default connect(
  (state) => ({ food: state.food })
)(FoodDetail)
