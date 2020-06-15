import React from 'react'
import Badge from '../Badge/Badge'

const ProductImage = ({ image, alt, discount }) => (
  <figure className='product__image'>
    <Badge discount={discount} />
    {image ? (
      <img src={image} alt={alt} title={alt} />
    ) : (
      <img
        src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+indisponível++:('
        alt={alt}
        title={alt}
      />
    )}
  </figure>
)

export default ProductImage
