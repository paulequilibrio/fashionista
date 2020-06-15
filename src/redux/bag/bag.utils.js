const checkItemSlugInBag = (bagItems, itemId) =>
  bagItems.find(bagItem => bagItem.id === itemId)

export const clearItemFromBag = (bagItems, itemToClear) => {
  return bagItems.filter(bagItem => bagItem.id !== itemToClear.id)
}

export const addItemToBag = (bagItems, itemToAdd) => {
  const alreadyInBag = checkItemSlugInBag(bagItems, itemToAdd.id)

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

export const removeItemFromBag = (bagItems, itemToRemove) => {
  const alreadyInBag = checkItemSlugInBag(bagItems, itemToRemove.id)

  if (alreadyInBag.quantity === 1) {
    return clearItemFromBag(bagItems, itemToRemove)
  } else {
    return bagItems.map(bagItem =>
      bagItem.id === itemToRemove.id
        ? { ...bagItem, quantity: bagItem.quantity - 1 }
        : bagItem
    )
  }
}

export const totalItems = bagItems =>
  bagItems.reduce((total, item) => total + item.quantity, 0)

export const sumItemsPrice = items => {
  const totalPrice = items
    .reduce((acc, item) => {
      const priceWithoutCurrency = item.actual_price
        .replace('R$ ', '')
        .replace(',', '.')
      const priceToFloat = parseFloat(priceWithoutCurrency)
      return acc + priceToFloat
    }, 0)
    .toFixed(2)
    .replace('.', ',')
  return totalPrice
}
