import { getId } from '../../utils'

export const createBagProduct = (product, size) => {
  const bagProduct = Object.assign({}, product)
  delete bagProduct.sizes
  const id = getId(bagProduct, size)
  return { ...bagProduct, id, size }
}

const itemInBag = (bagItems, itemId) =>
  bagItems.find(bagItem => bagItem.id === itemId)

export const clearItemFromBag = (bagItems, itemToClearId) => {
  return bagItems.filter(bagItem => bagItem.id !== itemToClearId)
}

export const addItemToBag = (bagItems, itemToAdd) => {
  const alreadyInBag = itemInBag(bagItems, itemToAdd.id)

  if (alreadyInBag) {
    return bagItems.map(bagItem =>
      bagItem.id === itemToAdd.id
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem
    )
  } else {
    return [...bagItems, { ...itemToAdd, quantity: 1 }]
  }
}

export const removeItemFromBag = (bagItems, itemToRemoveId) => {
  const alreadyInBag = itemInBag(bagItems, itemToRemoveId)

  if (alreadyInBag && alreadyInBag.quantity === 1) {
    return clearItemFromBag(bagItems, itemToRemoveId)
  } else {
    return bagItems.map(bagItem =>
      bagItem.id === itemToRemoveId
        ? { ...bagItem, quantity: bagItem.quantity - 1 }
        : bagItem
    )
  }
}

export const totalItems = bagItems =>
  bagItems.reduce((total, item) => total + item.quantity, 0)

export const totalItemsPrice = items => {
  return items
    .reduce(
      (total, item) =>
        total +
        item.quantity *
          parseFloat(item.actual_price.replace('R$ ', '').replace(',', '.')),
      0
    )
    .toFixed(2)
    .replace('.', ',')
}
