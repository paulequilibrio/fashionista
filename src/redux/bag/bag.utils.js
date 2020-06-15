import { slugfy } from '../../utils'

const checkItemSlugInBag = (bagItems, itemSlug) =>
  bagItems.find(bagItem => slugfy(bagItem) === itemSlug)

export const clearItemFromBag = (bagItems, itemToClear) => {
  const itemSlug = slugfy(itemToClear)
  return bagItems.filter(bagItem => slugfy(bagItem) !== itemSlug)
}

export const addItemToBag = (bagItems, itemToAdd) => {
  const itemSlug = slugfy(itemToAdd)
  const alreadyInBag = checkItemSlugInBag(bagItems, itemSlug)

  if (alreadyInBag) {
    return bagItems.map(bagItem =>
      slugfy(bagItem) === itemSlug
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem
    )
  } else {
    return [...bagItems, { ...itemToAdd, quantity: 1 }]
  }
}

export const removeItemFromBag = (bagItems, itemToRemove) => {
  const itemSlug = slugfy(itemToRemove)
  const alreadyInBag = checkItemSlugInBag(bagItems, itemSlug)

  if (alreadyInBag.quantity === 1) {
    return clearItemFromBag(itemToRemove)
  } else {
    return bagItems.map(bagItem =>
      slugfy(bagItem) === itemSlug
        ? { ...bagItem, quantity: bagItem.quantity - 1 }
        : bagItem
    )
  }
}
