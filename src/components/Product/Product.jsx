import React from 'react'

import './Product.css'

const placeholder = 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+indisponível++:('

const getURL = name =>
  `/product/${name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
  }`

const Product = ({ data }) => {
  const {
    name,
    image,
    on_sale: onSale,
    regular_price: regularPrice,
    actual_price: actualPrice,
    discount_percentage: discount
  } = data
  return (
    <div className='product'>
      <a href={getURL(name)}>
        <figure className='product__image'>
          {onSale ? (
            <span className='product__discount'>
              - {discount}
            </span>
          ) : ('')}
          {image ? (
            <img src={image} alt={`Produto ${name}`} />
          ) : (
            <img src={placeholder} alt={`Produto ${name}`} />
          )}
          <figcaption>
            <h3 className='product__name'>{name}</h3>
            <div className='product__pricing'>
              {onSale ? (
                <span className='product__price--from'>{regularPrice}</span>
              ) : ('')}
              <span className='product__price'>{actualPrice}</span>
            </div>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}

export default Product
