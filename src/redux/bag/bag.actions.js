import BagActionTypes from './bag.types'

export const addToBag = product => ({
  type: BagActionTypes.ADD_TO_BAG,
  payload: product
})

export const removeFromBag = productSlug => ({
  type: BagActionTypes.REMOVE_FROM_BAG,
  payload: productSlug
})

export const emptyBag = () => ({
  type: BagActionTypes.EMPTY_BAG
})
