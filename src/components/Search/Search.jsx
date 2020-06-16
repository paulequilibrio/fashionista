import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import uuid from 'uuid/v1'
import { debounce } from 'lodash'

import BagItem from '../../components/Product/BagItem'
import { slugfy } from '../../utils'
import { closeDrawer } from '../../redux/drawer/drawer.actions'
import { setSearchText, setSearchResult } from '../../redux/search/search.actions'

import './Search.css'

const searchProducts = (products, input) => {
  if (input) {
    return products.filter(product =>
      product.name.toLowerCase().includes(input.toLowerCase())
    )
  }
  return []
}

const Search = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.catalog.products)
  const text = useSelector(state => state.search.text)
  const result = useSelector(state => state.search.result)

  const filter = debounce(value => {
    dispatch(setSearchText(value))
    const result = searchProducts(products, value)
    dispatch(setSearchResult(result))
  }, 100)

  return (
    <div className='search'>
      <div className='search__form'>
        <input
          className='search__input'
          type='text'
          placeholder='Digite o nome de um produto...'
          defaultValue={text}
          onChange={event => filter(event.currentTarget.value)}
        />
      </div>

      {result.length > 0 && (
        <div className='header__title'>
          {result.length === 1
            ? `${result.length} produto encontrado`
            : `${result.length} produtos encontrados`}
        </div>
      )}

      <div className='product__list'>
        {result.length > 0 ? (
          result.map(product => (
            <Link
              key={uuid()}
              to={`/product/${slugfy(product)}`}
              onClick={event => dispatch(closeDrawer())}
            >
              <BagItem item={product} />
            </Link>
          ))
        ) : (
          <span className='bag__empty'>Nenhum produto encontrado :\</span>
        )}
      </div>
    </div>
  )
}
export default Search
