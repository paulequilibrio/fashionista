import SearchActionTypes from './search.types'

const INITIAL_STATE = {
  text: '',
  result: []
}

const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case SearchActionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        text: payload
      }
    case SearchActionTypes.SET_SEARCH_RESULT:
      return {
        ...state,
        result: payload
      }
    default:
      return state
  }
}

export default searchReducer
