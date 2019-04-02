import * as actions from '../actions/index'

export default( state={}, action) => {
  switch (action.type) {
    case actions.LIST_ALL:
      return {
        ...state,
        countries: action.payload,
        message: ''
      }
    case actions.SEARCH_RESULTS:
      return {
        ...state,
        countries: action.payload,
        message: ''
      }
    case actions.COUNTRY_DETAIL:
      return {
        ...state,
        country: action.payload,
        loading: action.loading
      }
    case actions.NO_RESULTS:
      return {
        ...state,
        countries: [],
        message: 'No Results'
      }
    default:
      return state
  }
}
