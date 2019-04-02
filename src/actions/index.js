import { foodSearchUrl } from '../lib/resource'
import axios from 'axios'

export const LIST_ALL = 'LIST_ALL'
export const SEARCH_FOOD = 'SEARCH_FOOD'
export const SEARCH_RESULTS = 'SEARCH_RESULTS'
export const NO_RESULTS = 'NO_RESULTS'
export const FOOD_DETAIL = 'FOOD_DETAIL'
export const ADD_EVENT = 'ADD_EVENT'
export const SAVE_FOOD = 'SAVE_FOOD'
export const CLOSE_MODAL = 'CLOSE_MODAL'


export const saveFood = (food) => {
  return({
    type: SAVE_FOOD,
    paylooad: food
  })
}

export const closeModal = () => {
  return({
    type: CLOSE_MODAL
  })
}

export const addEvent = (newevent) => {
  return ({
    type: ADD_EVENT,
    payload: newevent
  })
}

export const searchFood = (text) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(foodSearchUrl + text)

      dispatch({
        type: SEARCH_RESULTS,
        payload: result.data
      })

    } catch (error) {
      dispatch({
        type: NO_RESULTS
      })
    }
  }
}

export const foodDetail = (food) => {
  return({
    type: FOOD_DETAIL,
    payload: food
  })
}

