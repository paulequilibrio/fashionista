import React from 'react'
import { useSelector } from 'react-redux'

import CatalogItem from '../../components/Product/CatalogItem'

import { slugfy } from '../../utils'
import './CatalogPage.css'

const CatalogPage = () => {
  const products = useSelector(state => state.catalog.products)
  return (
    <section className='catalog'>
      <div className='container'>
        {products ? (
          <div>
            <span className='catalog__info'>
              Mostrando {products.length} produtos.
            </span>
            <div className='catalog__products'>
              {products.map(product => (
                <CatalogItem
                  key={slugfy(product)}
                  item={product}
                  className='catalog-item'
                />
              ))}
            </div>
          </div>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </section>
  )
}

export default CatalogPage
