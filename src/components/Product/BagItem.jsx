import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, PlusButton, MinusButton } from '../Buttons/Buttons'
import ProductImage from './ProductImage'

import { createBagProduct } from '../../redux/bag/bag.utils'

import {
  addToBag,
  removeFromBag,
  clearItemFromBag
} from '../../redux/bag/bag.actions'

const subtotal = item =>
  (
    item.quantity *
    parseFloat(item.actual_price.replace('R$ ', '').replace(',', '.'))
  ).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

const BagItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className='product__list__item'>
      <div className='product__list__row'>
        <ProductImage {...item} alt={item.name} />

        <div className='product__list__info'>
          <p className='product__list__name'>{item.name}</p>
          <p className='product__list__size'>
            <span>{`Tam.: ${item.size.size}`}</span>
          </p>

          {item.quantity && (
            <div className='product__list__quantity'>
              <MinusButton
                className='bag__icons'
                onClick={event => dispatch(removeFromBag(item.id))}
              />
              <div className='product__list__input'>{item.quantity}</div>
              <PlusButton
                className='bag__icons'
                onClick={event =>
                  dispatch(addToBag(createBagProduct(item, item.size)))
                }
              />
            </div>
          )}
        </div>

        <div className='product__list__pricing'>
          <div className='product__list__current'>{item.actual_price}</div>
          <div className='product__list__subtotal'>R$ {subtotal(item)}</div>
        </div>
      </div>

      {item.quantity && (
        <div className='product__row'>
          <Button
            className='bag__remove'
            onClick={event => dispatch(clearItemFromBag(item.id))}
          >
            Remover item
          </Button>
        </div>
      )}
    </div>
  )
}

export default BagItem
