import React from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './Topbar.css'

const Topbar = () => {
  return (
    <header className='topbar'>
      <div className='container'>
        <div className='topbar__header'>
          <a href='/'>
            <Logo className='topbar__logo' />
          </a>
          <div className='topbar__icons'>
            <button className='topbar__icon'>
              <FiSearch />
            </button>
            <button className='topbar__icon'>
              <FiShoppingBag />
              <sup className='counter'>
                <span className='counter__value'>0</span>
              </sup>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
