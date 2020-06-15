import React from 'react'

import CatalogItem from '../../components/CatalogItem/CatalogItem'

import products from './CatalogPage.products'

import './CatalogPage.css'

const CatalogPage = () => {
  return (
    <section className='catalog'>
      <div className='container'>
        <span className='catalog__info'>Mostrando {products.length} produtos.</span>
        <div className='catalog__products'>
          {
            products
              .map(product => (
                <CatalogItem key={product.image} data={product} />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default CatalogPage
