import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import { useSelector } from 'react-redux'

import BagItem from '../../components/Product/BagItem'

import { totalItemsPrice } from '../../redux/bag/bag.utils'

import './Bag.css'

const Bag = () => {
  const items = useSelector(state => state.bag.items)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(totalItemsPrice(items))
  }, [items])

  return (
    <div className='bag'>
      <div className='product__list'>
        {items.length > 0 ? (
          items.map(product => <BagItem item={product} key={uuid()} />)
        ) : (
          <span className='bag__empty'>Sua sacola está vazia :\</span>
        )}
      </div>

      <div className='bag__total'>
        <div className='header__title'>{`Subtotal: R$ ${total}`}</div>
      </div>
    </div>
  )
}

export default Bag
