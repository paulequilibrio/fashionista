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
