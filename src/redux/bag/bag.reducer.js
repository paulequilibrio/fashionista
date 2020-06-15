import BagActionTypes from './bag.types'
import { addItemToBag, removeItemFromBag, clearItemFromBag } from './bag.utils'

const INITIAL_STATE = {
  items: []
}

const bagReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case BagActionTypes.ADD_TO_BAG:
      return {
        ...state,
        items: addItemToBag(state.items, payload)
      }
    case BagActionTypes.REMOVE_FROM_BAG:
      return {
        ...state,
        items: removeItemFromBag(state.items, payload)
      }
    case BagActionTypes.CLEAR_ITEM_FROM_BAG:
      return {
        ...state,
        items: clearItemFromBag(state.items, payload)
      }
    case BagActionTypes.EMPTY_BAG:
      return {
        ...state,
        items: []
      }
    default:
      return state
  }
}

export default bagReducer
