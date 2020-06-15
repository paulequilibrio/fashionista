import React from 'react'
import Ink from 'react-ink'

import {
  FiSearch,
  FiShoppingBag,
  FiArrowLeft,
  FiPlus,
  FiMinus
} from 'react-icons/fi'

import './Buttons.css'

export const Button = ({ children }) => (
  <button className='button' type='button'>
    {children}
    <Ink />
  </button>
)

export const SearchButton = () => (
  <Button>
    <FiSearch />
  </Button>
)

export const BagButton = ({ value }) => (
  <Button>
    <FiShoppingBag />
    {parseInt(value) ? (
      <sup className='bag__value'>
        <span>{value}</span>
      </sup>
    ) : ('')}
  </Button>
)

export const BackButton = () => (
  <Button>
    <FiArrowLeft />
  </Button>
)

export const PlusButton = () => (
  <Button>
    <FiPlus />
  </Button>
)

export const MinusButton = () => (
  <Button>
    <FiMinus />
  </Button>
)
