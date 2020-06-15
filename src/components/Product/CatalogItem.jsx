/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

import ProductImage from './ProductImage'

import { slugfy } from '../../utils'
import './Product.css'

const CatalogItem = ({ item, className }) => {
  const {
    name,
    image,
    on_sale,
    actual_price,
    regular_price,
    discount_percentage
  } = item

  return (
    <div className={className}>
      <Link to={`/product/${slugfy(item)}`}>
        <ProductImage
          image={image}
          discount={discount_percentage}
          alt={name}
        />
        <h3 className='product__name'>{name}</h3>
        <div className='product__pricing'>
          {on_sale && (
            <span className='product__price--from'>
              {regular_price}
            </span>
          )}
          <span className='product__price'>
            {actual_price}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default CatalogItem
