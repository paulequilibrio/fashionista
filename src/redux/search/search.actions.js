import SearchActionTypes from './search.types'

export const setSearchText = text => ({
  type: SearchActionTypes.SET_SEARCH_TEXT,
  payload: text
})

export const setSearchResult = result => ({
  type: SearchActionTypes.SET_SEARCH_RESULT,
  payload: result
})
