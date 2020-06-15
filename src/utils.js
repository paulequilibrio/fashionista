const slugfyName = name =>
  name
    .toString()
    .normalize('NFD')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')

export const slugfy = product => {
  if (product.name && product.code_color) {
    return `${slugfyName(product.name)}:${product.code_color}`
  }
  return ''
}

export const getId = (product, size) => {
  return `${slugfy(product)}:${size.sku}`
}

export const createBagProduct = (product, size) => {
  const bagProduct = Object.assign({}, product)
  delete bagProduct.sizes
  const id = getId(bagProduct, size)
  return { ...bagProduct, id, size }
}
