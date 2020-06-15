import React from 'react'
import { Link } from 'react-router-dom'

import './CatalogItem.css'

const placeholder = 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+indisponível++:('

const getURL = name =>
  `/product/${name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
  }`

const CatalogItem = ({ data }) => {
  const {
    name,
    image,
    on_sale: onSale,
    regular_price: regularPrice,
    actual_price: actualPrice,
    discount_percentage: discount
  } = data
  return (
    <div className='catalog-item'>
      <Link to={getURL(name)}>
        <figure className='catalog-item__image'>
          {onSale ? (
            <span className='catalog-item__discount'>
              - {discount}
            </span>
          ) : ('')}
          {image ? (
            <img src={image} alt={`Produto ${name}`} />
          ) : (
            <img src={placeholder} alt={`Produto ${name}`} />
          )}
          <figcaption>
            <h3 className='catalog-item__name'>{name}</h3>
            <div className='catalog-item__pricing'>
              {onSale ? (
                <span className='catalog-item__price--from'>{regularPrice}</span>
              ) : ('')}
              <span className='catalog-item__price'>{actualPrice}</span>
            </div>
          </figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default CatalogItem
