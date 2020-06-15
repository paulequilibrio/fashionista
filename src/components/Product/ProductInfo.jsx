/* eslint-disable camelcase */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uuidv1 from 'uuid/v1'

import { Button } from '../Buttons/Buttons'
import { addToBag } from '../../redux/bag/bag.actions'

import { createBagProduct } from '../../utils'

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch()
  const [selectedSize, setSelectedSize] = useState({ sku: null })
  const [showWarning, setShowWarning] = useState(false)

  const {
    name,
    on_sale,
    regular_price,
    actual_price,
    installments,
    sizes
  } = product
  return (
    <div className='product__content'>
      <h3 className='product__name'>{name}</h3>

      <div className='product__pricing'>
        {on_sale && (
          <span className='product__price product__price--from'>
            {regular_price}
          </span>
        )}
        <span className='product__price'>{actual_price}</span>
        <span className='product__price product__price--installments'>
          {`em até ${installments}`}
        </span>
      </div>

      <div className='product__sizes'>
        <p className='product__sizes__title'>Escolha o tamanho</p>

        {showWarning && (
          <p className='product__sizes__warning'>
            É necessário escolher um tamanho
          </p>
        )}

        <div className='product__btn-group'>
          {sizes.length > 0 &&
            sizes
              .filter(item => item.available)
              .map(size => (
                <Button
                  onClick={event => {
                    setSelectedSize(size)
                    setShowWarning(false)
                  }}
                  key={uuidv1()}
                  className={`product__filter ${
                    selectedSize.sku === size.sku ? 'product__filter--selected' : ''
                  }`}
                >
                  {size.size}
                </Button>
              ))}
        </div>
      </div>

      <div className='product__actions'>
        <Button
          className='product__add-to-bag'
          onClick={event => {
            if (!selectedSize.size) {
              setShowWarning(true)
            } else {
              dispatch(addToBag(createBagProduct(product, selectedSize)))
            }
          }}
        >
          Adicionar à Sacola
        </Button>
      </div>
    </div>
  )
}

export default ProductInfo
