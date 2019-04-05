import React from 'react'

const MealSection = (props) => {
  return (
    <div className='meal-section'>
      <div className='mealtime' onClick={() => props.clickMeal(props.mealName)}>{props.mealName}</div>
      <div className='food-list'>
        {props.mealList.map((food, ind) => {
          return(
            <div key={ind}>
              <div className='food-item'>
                <div className='qty'>{food.qty}</div>
                <div className='food-name'>
                  {food.food.name}
                  <span className='brand'>{food.food.brand}</span>
                </div>
                <div className='calories'>{food.food.calories}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MealSection
