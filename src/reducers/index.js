import * as actions from '../actions/index'
import dateFns from 'date-fns'

const initialState = {
  currentDay: new Date(),
  show: false,
  currentMeal: '',
  mealList: []
}

export default( state = initialState, action) => {
  switch (action.type) {
    case actions.PREV_DAY:
      return {
        ...state,
        currentDay: action.payload
      }

    case actions.NEXT_DAY:
      return {
        ...state,
        currentDay: action.payload
      }

    case actions.SEARCH_RESULTS:
      return {
        ...state,
        foods: action.payload,
        message: ''
      }
    case actions.FOOD_DETAIL:
      return {
        ...state,
        food: action.payload,
        loading: action.loading
      }
    case actions.NO_RESULTS:
      return {
        ...state,
        food: [],
        message: 'No Results'
      }
    case actions.ADD_MEAL:
      return {
          ...state,
          currentMeal: action.payload.currentMeal,
          show: true
      }
    case actions.ADD_EVENT:
      return {
          ...state,
          newevent: action.payload,
          show: true
      }
    case actions.SAVE_FOOD:

      const foodDetail = {
        meal: state.currentMeal,
        food: action.payload
      }

      const mealFood = {
        day: state.currentDay,
        foods: [foodDetail]
      }

      let localFoods = JSON.parse(localStorage.getItem('foods')) || []

      const filterFoods = localFoods.filter(item => dateFns.isSameDay(item.day, mealFood.day))
      console.log('filterFoods', filterFoods)

      // Add food to a specific day
      let addFoods = []
      if (filterFoods.length > 0) {
        addFoods = localFoods.map((item) => {
          if (dateFns.isSameDay(item.day, mealFood.day)) {
            item.foods.push(foodDetail)
          }

          return item
        })
      } else {
        localFoods.push(mealFood)
        addFoods = localFoods
      }
      console.log('addFoods', addFoods)

      // localFoods.push(mealFood)
      localStorage.setItem('foods', JSON.stringify(addFoods))

      return {
        ...state,
        mealList: addFoods,
        food: {},
        show: false
      }
    default:
      return state
  }
}
