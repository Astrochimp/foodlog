import * as actions from '../actions/index'

export default( state={}, action) => {
  switch (action.type) {
    case actions.SEARCH_RESULTS:
      return {
        ...state,
        food: action.payload,
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
    default:
      return state
  }
}
