import * as actions from '../actions/index'

const initialState = {
  currentDay: new Date(),
  show: false
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
          show: true
      }
    case actions.ADD_EVENT:
      return {
          ...state,
          newevent: action.payload,
          show: true
      }
    case actions.SAVE_FOOD:
      let sevTime = new Date(state.newevent)
      const sevHR = action.payload.eventtime.split(':')
      sevTime.setHours(sevHR[0], sevHR[1])
      const updatedeventid = state.trackeventid + 1

      const neweventDetails = {
        eventid: updatedeventid,
        date: state.newevent,
        eventtime: sevTime,
        title: action.payload.title,
        color: action.payload.color
      }

      return {
        ...state,
        eventList: state.eventList.concat(neweventDetails),
        show: false,
        eventid: null,
        trackeventid: updatedeventid
      }
    default:
      return state
  }
}
