import React from 'react'

const MealSection = (props) => {
  return (
    <div className='meal-section'>
      <div className='mealtime' onClick={() => props.clickMeal(props.mealName)}>{props.mealName}</div>
      <div className='food-list'>
        {props.mealList.map((food, ind) => {
          return(
            <div key={ind}>
              <div className='food-item'>({food.qty}) {food.food.name} {food.food.calories}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MealSection
