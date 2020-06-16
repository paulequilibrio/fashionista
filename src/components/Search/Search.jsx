import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import uuid from 'uuid/v1'

import BagItem from '../../components/Product/BagItem'
import { slugfy } from '../../utils'
import './Search.css'
import { closeDrawer } from '../../redux/drawer/drawer.actions'

const searchProducts = (products, event) => {
  const input = event.currentTarget.value
  return products.filter(product =>
    product.name.toLowerCase().includes(input.toLowerCase())
  )
}

const Search = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.catalog.products)
  const [found, setFound] = useState([])

  return (
    <div className='search'>
      <div className='search__form'>
        <input
          className='search__input'
          type='text'
          placeholder='Buscar por produto...'
          onChange={event => setFound(searchProducts(products, event))}
        />
      </div>

      {found.length > 0 && (
        <div className='header__title'>
          {found.length === 1
            ? `${found.length} item encontrado`
            : `${found.length} items encontrados`}
        </div>
      )}

      <div className='product__list'>
        {found.length > 0 ? (
          found.map(product => (
            <Link
              key={uuid()}
              to={`/product/${slugfy(product)}`}
              onClick={event => dispatch(closeDrawer())}
            >
              <BagItem item={product} />
            </Link>
          ))
        ) : (
          <span className='bag__empty'>Nenhum item encontrado :\</span>
        )}
      </div>
    </div>
  )
}
export default Search
