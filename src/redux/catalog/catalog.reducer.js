import CatalogActionTypes from './catalog.types'

const INITIAL_STATE = {
  catalog: null,
  isFetching: false,
  error: null
}

const catalogReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case CatalogActionTypes.FETCH_CATALOG_START:
      return {
        ...state,
        isFetching: true
      }
    case CatalogActionTypes.FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        catalog: payload
      }
    case CatalogActionTypes.FETCH_CATALOG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      }
    default:
      return state
  }
}

export default catalogReducer
