import BagActionTypes from './bag.types'

export const addToBag = product => ({
  type: BagActionTypes.ADD_TO_BAG,
  payload: product
})

export const removeFromBag = productId => ({
  type: BagActionTypes.REMOVE_FROM_BAG,
  payload: productId
})

export const clearItemFromBag = productId => ({
  type: BagActionTypes.CLEAR_ITEM_FROM_BAG,
  payload: productId
})

export const emptyBag = () => ({
  type: BagActionTypes.EMPTY_BAG
})
