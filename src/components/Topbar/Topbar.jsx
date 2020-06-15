import React from 'react'
import { Link } from 'react-router-dom'

import { SearchButton, BagButton } from '../Buttons/Buttons'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './Topbar.css'

const Topbar = () => {
  return (
    <header className='topbar'>
      <div className='container'>
        <div className='topbar__header'>
          <Link to='/'>
            <Logo className='topbar__logo' />
          </Link>
          <div className='topbar__icons'>
            <SearchButton />
            <BagButton value='10' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
