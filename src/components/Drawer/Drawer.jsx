import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BackButton } from '../Buttons/Buttons'
import Bag from '../Bag/Bag'
import Search from '../Search/Search'

import { totalItems } from '../../redux/bag/bag.utils'
import { closeDrawer } from '../../redux/drawer/drawer.actions'

import './Drawer.css'

const Drawer = ({ isBagOpen, isSearchOpen, BagCounter }) => {
  const dispatch = useDispatch()
  const drawer = useSelector(state => state.drawer)
  const items = useSelector(state => state.bag.items)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(totalItems(items))
  }, [items])

  return (
    <div className={`drawer ${drawer.isVisible ? 'drawer--is-visible' : ''}`}>
      <div className='drawer__header container'>
        <div className='drawer__header-icon'>
          <BackButton onClick={() => dispatch(closeDrawer())} />
        </div>
        <div className='drawer__header-title'>
          {drawer.isBagOpen && (<span>{`Sacola (${total})`}</span>)}
          {drawer.isSearchOpen && (<span>Buscar produtos</span>)}
        </div>
      </div>
      <div className='drawer__content'>
        {drawer.isBagOpen && <Bag />}
        {drawer.isSearchOpen && <Search />}
      </div>
    </div>
  )
}

export default Drawer
