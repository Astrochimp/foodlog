import { countrySearchUrl, countryAllUrl  } from '../lib/resource'
import axios from 'axios'

export const LIST_ALL = 'LIST_ALL'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const SEARCH_RESULTS = 'SEARCH_RESULTS'
export const NO_RESULTS = 'NO_RESULTS'
export const COUNTRY_DETAIL = 'COUNTRY_DETAIL'


export const listAll = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(countryAllUrl)

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

export const searchCountry = (text) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(countrySearchUrl + text)

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

export const countryDetail = (country) => {
  return({
    type: COUNTRY_DETAIL,
    payload: country
  })
}

