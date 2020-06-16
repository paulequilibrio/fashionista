import React, { useState, useEffect } from 'react'
import Ink from 'react-ink'
import { useDispatch, useSelector } from 'react-redux'

import {
  FiSearch,
  FiShoppingBag,
  FiArrowLeft,
  FiPlus,
  FiMinus
} from 'react-icons/fi'

import {
  openSearchDrawer,
  openBagDrawer
} from '../../redux/drawer/drawer.actions'

import { totalItems } from '../../redux/bag/bag.utils'
import './Buttons.css'

export const Button = ({ children, ...props }) => (
  <button className='button' type='button' {...props}>
    {children}
    <Ink />
  </button>
)

export const SearchButton = ({ children, ...props }) => {
  const dispatch = useDispatch()
  return (
    <Button {...props} onClick={() => dispatch(openSearchDrawer())}>
      <FiSearch />
      {children}
    </Button>
  )
}

export const BagButton = ({ ...props }) => {
  const dispatch = useDispatch()
  const bagItems = useSelector(state => state.bag.items)
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(totalItems(bagItems))
  }, [bagItems])

  return (
    <Button {...props} onClick={() => dispatch(openBagDrawer())}>
      <FiShoppingBag />
      {parseInt(value) ? (
        <sup className='bag__value'>
          <span>{value}</span>
        </sup>
      ) : (
        ''
      )}
    </Button>
  )
}

export const BackButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiArrowLeft />
    {children}
  </Button>
)

export const PlusButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiPlus />
    {children}
  </Button>
)

export const MinusButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiMinus />
    {children}
  </Button>
)
