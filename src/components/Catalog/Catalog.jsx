import React from 'react'

import Product from '../Product/Product'

import products from './Catalog.products'

import './Catalog.css'

const Catalog = () => {
  return (
    <section className='catalog'>
      <div className='container'>
        <span className='catalog__info'>Mostrando {products.length} produtos.</span>
        <div className='catalog__products'>
          {
            products
              .map(product => (
                <Product key={product.image} data={product} />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Catalog
