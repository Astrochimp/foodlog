import * as actions from '../actions/index'

const initialState = {
  currentDay: new Date(),
  show: false,
  currentMeal: '',
  mealList: []
}

export default( state = initialState, action) => {
  switch (action.type) {
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
      const mealFood = {
        day: state.currentDay,
        meal: state.currentMeal,
        food: action.payload
      }

      let localFoods = JSON.parse(localStorage.getItem('foods')) || []
      localFoods.push(mealFood)
      localStorage.setItem('foods', JSON.stringify(localFoods))

      return {
        ...state,
        mealList: state.mealList.concat(mealFood),
        food: {},
        show: false
      }
    default:
      return state
  }
}
